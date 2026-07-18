"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = (window as unknown as Record<string, unknown>).__lenis;
    if (lenis && typeof (lenis as { scrollTo: unknown }).scrollTo === "function") {
      (lenis as { scrollTo: (target: number, opts?: object) => void }).scrollTo(0, { immediate: true });
    }
  }, []);

  return null;
}
