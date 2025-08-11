import { useEffect, useState } from "react";
import { isFreedomWeek } from "@/lib/independence";

// daily splash gating disabled - always show during isFreedomWeek

export default function IndependenceSplash() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (!isFreedomWeek(now)) return;

    // always show during Freedom Week (every refresh)

    // show splash
    setShow(true);

    // auto-dismiss after 3.2s (reduced motion gets shorter + no animation)
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => dismiss(), prefersReduced ? 1800 : 3200);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Happy Independence Day"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ backgroundColor: "hsl(var(--flag-white))" }} />

      {/* Card */}
      <div className="relative mx-6 w-full max-w-[680px] overflow-hidden rounded-2xl border border-white/15 bg-white/85 p-6 text-center shadow-2xl dark:border-white/10 dark:bg-background/90">
        {/* Decorative tri-color halo behind content */}
        <div
          className="pointer-events-none absolute -inset-24 -z-10 opacity-30 blur-2xl"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, hsl(var(--saffron)), white, hsl(var(--india-green)), hsl(var(--saffron)))",
          }}
        />

        {/* Flag + pole */}
        <div className="mx-auto mb-4 flex items-end justify-center gap-6">
          {/* Pole + stand */}
          <div className="relative h-40 w-3 rounded-full bg-foreground/90">
            <div className="absolute -bottom-4 left-1/2 h-3 w-16 -translate-x-1/2 rounded-md bg-foreground/80" />
            <div className="absolute -bottom-6 left-1/2 h-3 w-24 -translate-x-1/2 rounded-md bg-foreground/70" />
          </div>

          {/* Flag (waving) */}
          <div className="relative">
            <div className="indi-flag relative h-24 w-40 overflow-hidden rounded-r-md shadow-md">
              {/* Saffron / White / Green stripes */}
              <div className="h-1/3 w-full" style={{ backgroundColor: "hsl(var(--saffron))" }} />
              <div className="relative h-1/3 w-full bg-white">
                {/* Ashoka Chakra */}
                <svg
                  className="absolute left-6 top-1/2 -translate-y-1/2"
                  width="28"
                  height="28"
                  viewBox="0 0 48 48"
                  aria-hidden
                >
                  <circle cx="24" cy="24" r="22" fill="none" stroke="hsl(var(--chakra))" strokeWidth="2" />
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * Math.PI) / 12;
                    const x1 = 24 + Math.cos(angle) * 8;
                    const y1 = 24 + Math.sin(angle) * 8;
                    const x2 = 24 + Math.cos(angle) * 20;
                    const y2 = 24 + Math.sin(angle) * 20;
                    return (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--chakra))" strokeWidth="2" />
                    );
                  })}
                </svg>
              </div>
              <div className="h-1/3 w-full" style={{ backgroundColor: "hsl(var(--india-green))" }} />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-extrabold text-foreground">
          Happy Independence Day, India! <span role="img" aria-label="India flag">🇮🇳</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Celebrating the <b>79<sup>th</sup></b> year of freedom • <b>15 August 2025</b> • Jai Hind!
        </p>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            className="rounded-md bg-foreground/90 px-4 py-2 text-sm font-semibold text-background shadow hover:bg-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => dismiss()}
          >
            Continue
          </button>
          <button
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground/90 hover:bg-accent"
            onClick={() => dismiss()}
          >
            Skip
          </button>
        </div>

        {/* Reduced motion hint */}
        <p className="mt-3 text-[11px] text-muted-foreground">
          This screen shows once per day during Freedom Week.
        </p>
      </div>

      {/* Component-scoped CSS for the waving animation */}
      <style>
        {`
        .indi-flag { transform-origin: left center; animation: flagWave 2.2s ease-in-out infinite; }
        @keyframes flagWave {
          0%   { transform: perspective(600px) rotateY(0deg) skewY(0deg); }
          25%  { transform: perspective(600px) rotateY(-8deg) skewY(-1.2deg); }
          50%  { transform: perspective(600px) rotateY(0deg) skewY(0deg); }
          75%  { transform: perspective(600px) rotateY(6deg) skewY(0.8deg); }
          100% { transform: perspective(600px) rotateY(0deg) skewY(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .indi-flag { animation: none; }
        }
      `}
      </style>
    </div>
  );
}
