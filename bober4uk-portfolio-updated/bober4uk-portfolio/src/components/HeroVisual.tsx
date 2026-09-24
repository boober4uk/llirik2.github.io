"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { x: 120, y: 60 }, { x: 220, y: 40 }, { x: 320, y: 90 },
  { x: 80, y: 160 }, { x: 200, y: 150 }, { x: 300, y: 190 }, { x: 380, y: 140 },
  { x: 140, y: 260 }, { x: 260, y: 280 }, { x: 360, y: 250 }
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [2, 6],
  [3, 4], [4, 5], [5, 6], [3, 7], [4, 8], [5, 8], [5, 9], [6, 9],
  [7, 8], [8, 9]
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <motion.div
        className="absolute inset-8 rounded-full bg-accent/10 blur-[90px]"
        animate={reduceMotion ? undefined : { scale: [0.9, 1.08, 0.9], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.svg
        viewBox="0 0 440 340"
        className="relative h-full w-full overflow-visible"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7CE8A9" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#6ee7f9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7CE8A9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7CE8A9" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.12" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {EDGES.map(([a, b], i) => (
          <motion.line
            key={`edge-${i}`}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="url(#edgeGradient)"
            strokeWidth="1.2"
            strokeDasharray="5 9"
            animate={reduceMotion ? undefined : { strokeDashoffset: [0, -56], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 2.8 + (i % 4) * 0.35, repeat: Infinity, ease: "linear", delay: i * 0.08 }}
          />
        ))}

        {EDGES.map(([a, b], i) => (
          <motion.circle
            key={`packet-${i}`}
            r="2.5"
            fill="#7CE8A9"
            filter="url(#softGlow)"
            animate={reduceMotion ? undefined : {
              cx: [NODES[a].x, NODES[b].x],
              cy: [NODES[a].y, NODES[b].y],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2.2 + (i % 3) * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}

        {NODES.map((n, i) => (
          <motion.g
            key={i}
            animate={reduceMotion ? undefined : { y: [0, i % 2 ? -4 : 4, 0], rotate: [0, i % 2 ? 2 : -2, 0] }}
            transition={{ duration: 3.5 + (i % 4) * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          >
            <circle cx={n.x} cy={n.y} r="25" fill="url(#nodeGlow)" opacity={i % 3 === 0 ? 0.55 : 0.2} />
            <rect
              x={n.x - 7}
              y={n.y - 7}
              width="14"
              height="14"
              rx="3.5"
              fill="#0E1310"
              stroke="#7CE8A9"
              strokeOpacity="0.8"
              strokeWidth="1"
              filter="url(#softGlow)"
            />
            <rect
              x={n.x - 2.5}
              y={n.y - 2.5}
              width="5"
              height="5"
              rx="1.5"
              fill="#7CE8A9"
              opacity="0.75"
            />
          </motion.g>
        ))}
      </motion.svg>

      <motion.div
        className="pointer-events-none absolute inset-0 flex items-end justify-start"
        initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <code className="rounded-lg border border-border bg-void/70 px-3 py-2 font-mono text-[11px] text-accent/90 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur">
          function bober4uk:load
        </code>
      </motion.div>

      <svg className="pointer-events-none absolute -right-3 top-3 h-20 w-20 text-accent/20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M40 5v70M5 40h70" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 6" />
        <circle cx="40" cy="40" r="29" stroke="currentColor" strokeWidth="0.7" />
      </svg>
    </div>
  );
}
