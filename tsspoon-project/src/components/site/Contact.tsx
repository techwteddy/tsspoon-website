import { useState } from "react";
import { Section, SectionLabel } from "./Section";
import { Instagram, MapPin, Check, Mail } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
    </svg>
  );
}


type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      inquiry_type: String(fd.get("inquiry_type") || "General"),
      source: "tsspoon",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMsg("Please fill in name, email, and message.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("https://dinqdigital.com/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or DM us on Instagram.");
    }
  }

  const inputCls =
    "w-full bg-[#1a0f0f] border border-[#C9956C]/20 rounded-sm px-4 py-3.5 text-[#F5F0EB] placeholder:text-[#F5F0EB]/35 focus:border-rose-gold focus:outline-none transition-colors";

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl sm:text-6xl text-rose-gold leading-tight">
            Get in Touch
          </h2>
          <p className="mt-6 text-[#F5F0EB]/75 text-lg">
            Questions, preorders, or business inquiries — we'd love to hear from you.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="https://instagram.com/tsspoon"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-[#F5F0EB]/85 hover:text-rose-gold transition-colors"
            >
              <span className="h-10 w-10 grid place-items-center border border-[#B87333]/35 rounded-full">
                <Instagram className="h-4 w-4" />
              </span>
              <span>@tsspoon</span>
            </a>
            <a
              href="https://tiktok.com/@ts.spoon"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-[#F5F0EB]/85 hover:text-rose-gold transition-colors"
            >
              <span className="h-10 w-10 grid place-items-center border border-[#B87333]/35 rounded-full">
                <TikTokIcon className="h-4 w-4" />
              </span>
              <span>@ts.spoon</span>
            </a>
            <a
              href="mailto:ts.spoon.sea@gmail.com"
              className="flex items-center gap-4 text-[#F5F0EB]/85 hover:text-rose-gold transition-colors"
            >
              <span className="h-10 w-10 grid place-items-center border border-[#B87333]/35 rounded-full">
                <Mail className="h-4 w-4" />
              </span>
              <span>ts.spoon.sea@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 text-[#F5F0EB]/85">
              <span className="h-10 w-10 grid place-items-center border border-[#B87333]/35 rounded-full">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Seattle / Bellevue, WA</span>
            </div>
          </div>
        </div>


        <form onSubmit={onSubmit} className="glass-card rounded-md p-7 sm:p-10 space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-rose-gold mb-2">
              Name
            </label>
            <input name="name" required maxLength={120} className={inputCls} placeholder="Your name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-rose-gold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                maxLength={200}
                className={inputCls}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-rose-gold mb-2">
                Phone <span className="text-[#F5F0EB]/40 normal-case tracking-normal">(optional)</span>
              </label>
              <input name="phone" maxLength={40} className={inputCls} placeholder="(555) 555-5555" />
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-rose-gold mb-2">
              Inquiry Type
            </label>
            <select name="inquiry_type" className={inputCls} defaultValue="General">
              <option>General</option>
              <option>Preorder Question</option>
              <option>Business Inquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-rose-gold mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={2000}
              className={inputCls}
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rose-glow-hover w-full inline-flex items-center justify-center px-8 py-4 bg-rose-gold text-[#0A0A0A] font-medium tracking-widest uppercase text-sm rounded-sm rose-glow disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : status === "success" ? (
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Message Sent</span>
            ) : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-400">{errorMsg}</p>
          )}
          {status === "success" && (
            <p className="text-sm text-rose-gold">Thank you — we'll be in touch soon.</p>
          )}
        </form>
      </div>
    </Section>
  );
}
