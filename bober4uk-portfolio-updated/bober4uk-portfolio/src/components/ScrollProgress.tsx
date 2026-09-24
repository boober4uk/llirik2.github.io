"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.18 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-accent via-cyan-300 to-violet-400 shadow-[0_0_16px_rgba(124,232,169,0.65)]"
      style={{ scaleX }}
    />
  );
}
