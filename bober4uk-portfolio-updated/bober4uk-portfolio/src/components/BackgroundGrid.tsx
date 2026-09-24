"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BackgroundGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_85%_65%_at_50%_0%,#000_35%,transparent_100%)]" />
      <motion.div
        className="absolute -top-40 left-1/4 h-[560px] w-[560px] rounded-full bg-accent/10 blur-[150px]"
        animate={reduceMotion ? undefined : { x: [0, 35, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[-8%] h-[480px] w-[480px] rounded-full bg-violet-500/10 blur-[170px]"
        animate={reduceMotion ? undefined : { x: [0, -40, 0], y: [0, 35, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-[-20%] left-[8%] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.045] blur-[130px]" />

      <svg className="absolute inset-0 h-full w-full opacity-[0.14]" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ambientLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7CE8A9" stopOpacity="0" />
            <stop offset="0.5" stopColor="#7CE8A9" stopOpacity="0.55" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-50 610 C220 420 360 720 620 500 S980 300 1250 120" fill="none" stroke="url(#ambientLine)" strokeWidth="1" strokeDasharray="2 12" />
        <path d="M-80 700 C220 520 450 760 720 570 S1020 400 1280 250" fill="none" stroke="url(#ambientLine)" strokeWidth="0.7" strokeDasharray="1 18" />
        <circle cx="920" cy="150" r="130" fill="none" stroke="#7CE8A9" strokeOpacity="0.12" strokeDasharray="2 10" />
        <circle cx="920" cy="150" r="95" fill="none" stroke="#a78bfa" strokeOpacity="0.08" />
      </svg>

      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
