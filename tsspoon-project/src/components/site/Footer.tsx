import { Instagram, Mail } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#preorder", label: "Preorder" },
  { href: "#contact", label: "Contact" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#B87333]/20 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#top" className="font-display text-3xl text-rose-gold">
              T'<span className="italic">$</span> Spoon
            </a>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#F5F0EB]/60">
              Elevated Plates | Bold Flavors
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm uppercase tracking-[0.2em] text-[#F5F0EB]/75 hover:text-rose-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="md:text-right space-y-2">
            <a
              href="https://instagram.com/tsspoon"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-rose-gold hover:opacity-80 md:justify-end w-full"
            >
              <Instagram className="h-4 w-4" />
              @tsspoon
            </a>
            <a
              href="https://tiktok.com/@ts.spoon"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-rose-gold hover:opacity-80 md:justify-end w-full"
            >
              <TikTokIcon className="h-4 w-4" />
              @ts.spoon
            </a>
            <a
              href="mailto:ts.spoon.sea@gmail.com"
              className="inline-flex items-center gap-2 text-[#F5F0EB]/75 hover:text-rose-gold md:justify-end w-full"
            >
              <Mail className="h-4 w-4" />
              ts.spoon.sea@gmail.com
            </a>
            <p className="mt-3 text-sm text-[#F5F0EB]/55">Seattle / Bellevue, WA</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#B87333]/15 text-xs text-[#F5F0EB]/45">
          <span>© 2026 T'$ Spoon. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
