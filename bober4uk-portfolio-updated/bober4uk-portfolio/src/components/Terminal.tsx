"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

type Line = { command: string; output: string };

function useTypedLines(lines: Line[], active: boolean) {
  const [rendered, setRendered] = useState<{ command: string; output: string; done: boolean }[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;

    if (reduceMotion) {
      setRendered(lines.map((l) => ({ ...l, done: true })));
      return;
    }

    let cancelled = false;
    setRendered(lines.map(() => ({ command: "", output: "", done: false })));

    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    async function run() {
      for (let li = 0; li < lines.length; li++) {
        const { command, output } = lines[li];

        for (let i = 1; i <= command.length; i++) {
          if (cancelled) return;
          await wait(32);
          setRendered((prev) => {
            const next = [...prev];
            next[li] = { ...next[li], command: command.slice(0, i) };
            return next;
          });
        }

        await wait(180);
        if (cancelled) return;

        setRendered((prev) => {
          const next = [...prev];
          next[li] = { ...next[li], output, done: true };
          return next;
        });

        await wait(340);
      }
    }

    run();
    return () => { cancelled = true; };
  }, [active, lines, reduceMotion]);

  return rendered;
}

export function Terminal() {
  const boxRef = useRef<HTMLDivElement>(null);
  const inView = useInView(boxRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(false);
  const typed = useTypedLines(siteConfig.terminalLines, active);

  useEffect(() => {
    if (inView) setActive(true);
  }, [inView]);

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <p className="font-mono text-xs text-accent/80">{siteConfig.terminalEyebrow}</p>
        </Reveal>

        <Reveal delay={0.06} className="mt-6">
          <motion.div
            ref={boxRef}
            className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-[0_30px_100px_-35px_rgba(0,0,0,0.75)] glass-edge"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-muted/70">bober4uk — zsh</span>
            </div>

            <div className="min-h-[210px] space-y-4 p-5 font-mono text-sm">
              {(active ? typed : siteConfig.terminalLines.map((l) => ({ ...l, done: false }))).map((line, i) => (
                <div key={i} className="min-h-10">
                  <div className="flex items-start text-muted">
                    <span className="mr-2 select-none text-accent">❯</span>
                    <span>{line.command}</span>
                    {!line.done && (
                      <span className="ml-1 inline-block h-4 w-[7px] animate-blink rounded-[1px] bg-accent align-middle shadow-[0_0_8px_rgba(124,232,169,0.65)]" />
                    )}
                  </div>

                  <AnimatePresence>
                    {line.done && (
                      <motion.div
                        initial={{ opacity: 0, x: -8, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        className="mt-1 pl-5 text-ink/90"
                      >
                        {line.output}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
