"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  className?: string;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  // Matches optional prefix like "$", then digits with optional commas, then optional suffix like "+", "K+", etc.
  const match = value.match(/^([^0-9]*)([0-9,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  };
}

function formatNumber(n: number, originalNumberStr: string): string {
  // Preserve comma formatting if original had commas
  if (originalNumberStr.includes(",")) {
    return n.toLocaleString("en-US");
  }
  return String(n);
}

export default function CountUp({ value, className }: CountUpProps) {
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const { prefix, number, suffix } = parseValue(value);
  const originalNumberStr = value.match(/[0-9,]+/)?.[0] ?? "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * number);
      setDisplay(formatNumber(current, originalNumberStr));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [started, number, originalNumberStr]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
