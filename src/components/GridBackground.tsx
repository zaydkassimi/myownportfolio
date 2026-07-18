"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 30px, #1a1a1a 30px, #1a1a1a 31px), repeating-linear-gradient(-45deg, transparent, transparent 30px, #1a1a1a 30px, #1a1a1a 31px)",
        }}
      />
    </div>
  );
}
