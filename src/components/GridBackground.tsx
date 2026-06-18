"use client";

import { useEffect, useRef, useMemo } from "react";

interface Cube {
  x: number;
  y: number;
  size: number;
  active: boolean;
  opacity: number;
  targetOpacity: number;
  color: string;
}

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubesRef = useRef<Cube[]>([]);
  const animRef = useRef<number>(0);

  const colors = useMemo(
    () => [
      "rgba(200, 60, 50, 0.5)",
      "rgba(200, 60, 50, 0.3)",
      "rgba(180, 180, 180, 0.2)",
      "rgba(200, 200, 200, 0.15)",
    ],
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initCubes = (w: number, h: number) => {
      const gap = 48;
      const size = 20;
      const cubes: Cube[] = [];

      for (let x = gap; x < w - gap; x += gap) {
        for (let y = gap; y < h - gap; y += gap) {
          if (Math.random() > 0.55) continue;
          cubes.push({
            x,
            y,
            size,
            active: Math.random() > 0.7,
            opacity: Math.random() * 0.3,
            targetOpacity: Math.random() > 0.7 ? 0.3 + Math.random() * 0.5 : 0.05,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }
      cubesRef.current = cubes;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      const w = rect.width;
      const h = Math.max(rect.height, canvas.parentElement!.scrollHeight);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      initCubes(w, h);
    };

    const draw = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const w = rect.width;
      const h = Math.max(rect.height, canvas.parentElement!.scrollHeight);
      ctx.clearRect(0, 0, w, h);

      const cubes = cubesRef.current;

      if (Math.random() > 0.92) {
        const idx = Math.floor(Math.random() * cubes.length);
        if (cubes[idx]) {
          cubes[idx].active = !cubes[idx].active;
          cubes[idx].targetOpacity = cubes[idx].active
            ? 0.2 + Math.random() * 0.6
            : 0.03;
          cubes[idx].color = cubes[idx].active
            ? colors[Math.floor(Math.random() * 2)]
            : colors[2 + Math.floor(Math.random() * 2)];
        }
      }

      for (const cube of cubes) {
        cube.opacity += (cube.targetOpacity - cube.opacity) * 0.04;

        ctx.fillStyle = cube.color;
        ctx.globalAlpha = cube.opacity;
        ctx.beginPath();
        ctx.roundRect(
          cube.x - cube.size / 2,
          cube.y - cube.size / 2,
          cube.size,
          cube.size,
          3
        );
        ctx.fill();

        if (cube.active && cube.opacity > 0.15) {
          ctx.globalAlpha = cube.opacity * 0.6;
          ctx.strokeStyle = cube.color;
          ctx.lineWidth = 1;
          const cx = cube.x;
          const cy = cube.y;
          const r = cube.size * 0.35;
          for (let i = 0; i < 4; i++) {
            const angle = (i * Math.PI) / 4;
            ctx.beginPath();
            ctx.moveTo(cx - Math.cos(angle) * r, cy - Math.sin(angle) * r);
            ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
    });
    observer.observe(canvas.parentElement!);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(animRef.current);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
