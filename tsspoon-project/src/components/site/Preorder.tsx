import { useEffect, useState } from "react";
import { Section, SectionLabel } from "./Section";

const ORDER_URL =
  (import.meta as any).env?.NEXT_PUBLIC_ORDER_URL ??
  (import.meta as any).env?.VITE_ORDER_URL ??
  "#preorder";
const TARGET = new Date("2026-06-21T00:00:00").getTime();


function useCountdown(target: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function Cell({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass-card rounded-md px-4 sm:px-6 py-5 sm:py-7 min-w-[78px] sm:min-w-[110px] text-center">
      <div className="font-display text-3xl sm:text-5xl text-rose-gold tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#F5F0EB]/60">
        {label}
      </div>
    </div>
  );
}

export function Preorder() {
  const { d, h, m, s } = useCountdown(TARGET);
  return (
    <Section id="preorder" className="grain">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(184,115,51,0.18) 0%, transparent 60%)",

        }}
      />
      <div className="text-center max-w-3xl mx-auto">
        <SectionLabel>Opening Soon</SectionLabel>
        <h2 className="font-display text-4xl sm:text-6xl text-rose-gold">Be First at the Table</h2>
        <p className="mt-5 text-lg text-[#F5F0EB]/75">
          T'$ Spoon launches <span className="text-rose-gold">June 21st</span>. Reserve your plate now.
        </p>

        <div className="mt-12 flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Cell label="Days" value={d} />
          <Cell label="Hours" value={h} />
          <Cell label="Minutes" value={m} />
          <Cell label="Seconds" value={s} />
        </div>

        <div className="mt-14">
          <a
            href={ORDER_URL}
            className="rose-glow-hover inline-flex items-center justify-center px-10 sm:px-14 py-5 bg-rose-gold text-[#0A0A0A] font-medium tracking-widest uppercase text-sm rounded-sm rose-glow"
          >
            Preorder Now
          </a>
          <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#F5F0EB]/50">
            Preorders close 24hrs before each drop
          </p>
        </div>
      </div>
    </Section>
  );
}
