import { Section, SectionLabel } from "./Section";
import { motion } from "framer-motion";

export function OurStory() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-rose-gold leading-tight">
            Food that feels personal.
          </h2>
          <p className="mt-8 text-lg text-[#F5F0EB]/80 leading-relaxed">
            T$ Spoon was created from a love for elevated plates and food that feels personal, memorable, and made with care. Every dish is crafted to bring people together and leave a lasting impression.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="h-px w-16 bg-rose-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold">Est. 2025</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center aspect-square max-w-md mx-auto"
        >
          {/* large decorative spoon */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(201,149,108,0.18), transparent 65%)",
            }}
          />
          <svg viewBox="0 0 200 300" className="relative w-full h-full text-[#C9956C]" fill="none" stroke="currentColor" strokeWidth="1.2">
            <ellipse cx="100" cy="70" rx="55" ry="65" />
            <ellipse cx="100" cy="70" rx="42" ry="50" opacity="0.4" />
            <path d="M100 135 L100 285" strokeLinecap="round" />
            <circle cx="100" cy="285" r="3" fill="currentColor" />
            {/* decorative rings */}
            <circle cx="100" cy="70" r="85" opacity="0.25" strokeDasharray="2 6" />
            <circle cx="100" cy="70" r="98" opacity="0.15" />
          </svg>
        </motion.div>
      </div>
    </Section>
  );
}
