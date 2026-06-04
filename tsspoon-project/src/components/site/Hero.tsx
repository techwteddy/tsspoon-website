import { motion } from "framer-motion";
import heroImg from "@/assets/hero-plate.jpg";

const ORDER_URL =
  (import.meta as any).env?.NEXT_PUBLIC_ORDER_URL ??
  (import.meta as any).env?.VITE_ORDER_URL ??
  "#preorder";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
    >
      {/* full-bleed moody food photography */}
      <img
        src={heroImg}
        alt="Signature plate of honey garlic lamb chops"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,6,8,0.55) 0%, rgba(13,6,8,0.7) 45%, rgba(13,6,8,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xs sm:text-sm uppercase tracking-[0.4em] text-rose-gold mb-6"
        >
          Seattle · Bellevue, WA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-rose-gold leading-[0.95] tracking-tight text-5xl sm:text-7xl md:text-8xl"
        >
          Elevated Plates.
          <br />
          <span className="italic text-[#D4915A]">Bold Flavors.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-[#F5F0EB]/85 font-light"
        >
          Signature plates crafted with intention, passion, and flavor you won't forget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="rose-glow-hover inline-flex items-center justify-center px-8 py-4 bg-rose-gold text-[#0D0608] font-medium tracking-widest uppercase text-sm rounded-sm rose-glow"
          >
            View Menu
          </a>
          <a
            href={ORDER_URL}
            className="rose-glow-hover inline-flex items-center justify-center px-8 py-4 border border-rose-gold text-rose-gold font-medium tracking-widest uppercase text-sm rounded-sm hover:bg-[#B87333]/10"
          >
            Preorder Now
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-gold/70 text-xs uppercase tracking-[0.3em]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
