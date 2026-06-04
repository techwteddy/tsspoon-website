import { motion } from "framer-motion";

export function SpoonDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12">
      <span className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent to-[#C9956C]/60" />
      <SpoonIcon className="h-5 w-5 text-[#C9956C]" />
      <span className="h-px w-24 sm:w-40 bg-gradient-to-l from-transparent to-[#C9956C]/60" />
    </div>
  );
}

export function SpoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <ellipse cx="12" cy="6" rx="4" ry="5" />
      <path d="M12 11v11" />
    </svg>
  );
}

export function FloatingSpoon({ delay = 0, x = "10%", y = "20%" }: { delay?: number; x?: string; y?: string }) {
  return (
    <motion.div
      className="absolute text-[#C9956C]/20 pointer-events-none"
      style={{ left: x, top: y }}
      animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <SpoonIcon className="h-16 w-16" />
    </motion.div>
  );
}
