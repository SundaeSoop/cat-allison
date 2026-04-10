"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Phase = "idle" | "cover" | "reveal";
type GlitchCtx = { trigger: (href: string) => void };

const GlitchContext = createContext<GlitchCtx>({ trigger: () => {} });
export const useGlitch = () => useContext(GlitchContext);

const STRIP_COUNT = 10;

const NAVIGATE_AT = 300;
const REVEAL_AT   = 550;
const DONE_AT     = 1000;

export function GlitchProvider({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const phaseRef = useRef<Phase>("idle");
  const router = useRouter();

  const trigger = useCallback(
    (href: string) => {
      if (phaseRef.current !== "idle") return;
      const set = (p: Phase) => { phaseRef.current = p; setPhase(p); };

      set("cover");
      setTimeout(() => router.push(href), NAVIGATE_AT);
      setTimeout(() => set("reveal"), REVEAL_AT);
      setTimeout(() => set("idle"),   DONE_AT);
    },
    [router]
  );

  return (
    <GlitchContext.Provider value={{ trigger }}>
      {children}
      {phase !== "idle" && (
        <div aria-hidden className="glitch-overlay">
          <div className="glitch-fade" />
          {Array.from({ length: STRIP_COUNT }, (_, i) => (
            <div
              key={i}
              className="glitch-strip"
              data-phase={phase}
              data-dir={i % 2 === 0 ? "left" : "right"}
              style={{
                "--strip-i": i,
                "--strip-nudge": `${(i % 3 - 1) * 14}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}
    </GlitchContext.Provider>
  );
}
