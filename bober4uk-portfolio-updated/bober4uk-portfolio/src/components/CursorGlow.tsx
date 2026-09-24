"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = glowRef.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    let raf = 0;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    function onMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      target = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function tick() {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      if (el) el.style.transform = `translate3d(${current.x - 220}px, ${current.y - 220}px, 0)`;
      raf = requestAnimationFrame(tick);
    }

    parent.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-[440px] w-[440px] rounded-full bg-accent/[0.08] blur-[90px]"
    />
  );
}
