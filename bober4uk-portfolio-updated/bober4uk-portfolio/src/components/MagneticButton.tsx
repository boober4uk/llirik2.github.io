"use client";

import { useReducedMotion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

export function MagneticButton({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
    setOffset({ x, y });
  }

  function reset() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: "transform 220ms ease-out"
      }}
    >
      {children}
    </div>
  );
}
