"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLine {
  type: "input" | "output" | "success";
  text: string;
}

const TERMINAL_SEQUENCE: TerminalLine[] = [
  { type: "input", text: '$ sitegeist build "Downtown Plumbing Co."' },
  { type: "output", text: "→ Connecting to design team..." },
  { type: "output", text: "→ Building custom layout & pages..." },
  { type: "output", text: "→ Writing professional copy..." },
  { type: "output", text: "→ Optimizing for search engines..." },
  { type: "output", text: "→ Deploying to global network..." },
  { type: "success", text: "✓ Live at https://downtownplumbing.co.za" },
  { type: "success", text: "✓ Delivered in 47 hours" },
];

function TypingText({ text, speed = 25 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <>
      {displayed}
      {!done && (
        <span className="inline-block h-3.5 w-2 animate-blink bg-accent align-middle" />
      )}
    </>
  );
}

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [cycle, setCycle] = useState(0);

  const runSequence = useCallback(() => {
    setVisibleLines(0);
    let delay = 0;
    TERMINAL_SEQUENCE.forEach((line, i) => {
      const charCount = line.text.length;
      const typingTime = line.type === "input" ? charCount * 25 : charCount * 12;
      const pauseAfter = line.type === "input" ? 400 : 200;
      delay += typingTime + pauseAfter;
      setTimeout(() => {
        setVisibleLines(i + 1);
      }, delay);
    });

    // Stop after 2 full cycles to save CPU
    if (cycle < 1) {
      const totalDelay = delay + 3000;
      setTimeout(() => {
        setCycle((c) => c + 1);
      }, totalDelay);
    }
  }, [cycle]);

  useEffect(() => {
    runSequence();
  }, [cycle, runSequence]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg-card"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-text-muted">
          sitegeist — build-engine
        </span>
      </div>

      <div className="p-4 font-mono text-xs leading-relaxed sm:text-sm">
        <AnimatePresence mode="wait">
          {TERMINAL_SEQUENCE.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={`${cycle}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={
                line.type === "input"
                  ? "text-accent"
                  : line.type === "success"
                    ? "text-green-400"
                    : "text-text-secondary"
              }
            >
              {i === visibleLines - 1 && !line.text.startsWith("✓") ? (
                <TypingText text={line.text} speed={line.type === "input" ? 25 : 12} />
              ) : (
                line.text
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {visibleLines >= TERMINAL_SEQUENCE.length && (
          <div className="mt-1">
            <span className="text-accent">$</span>{" "}
            <span className="inline-block h-3.5 w-2 animate-blink bg-accent align-middle" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
