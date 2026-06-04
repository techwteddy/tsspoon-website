import { Section, SectionLabel } from "./Section";
import { motion } from "framer-motion";

const plates = [
  {
    name: "Honey Garlic Lamb Chops",
    desc: "Glazed in a rich honey garlic sauce.",
    price: "$35",
  },
  {
    name: "Cajun Butter Garlic Steak Bites",
    desc: "Juicy steak bites tossed in a bold cajun butter garlic sauce.",
    price: "$30",
  },
  {
    name: "Cajun Shrimp Pasta",
    desc: "Creamy pasta infused with cajun spice and sautéed shrimp.",
    price: "$25",
  },
  {
    name: "Salmon Bites Bowl",
    desc: "Seasoned salmon bites with rice, fresh cucumber, and sriracha mayo.",
    price: "$25",
  },
  {
    name: "Croissant Turkey Egg Sandwich",
    desc: "Signature egg spread with fresh avocado.",
    price: "$12",
  },
  {
    name: "Chicken Wings",
    desc: "Lemon Pepper or Honey Garlic. Regular or Spicy.",
    price: "6pc $15  ·  8pc $20",
  },
];

const addons = [
  { name: "Additional Side", price: "+$5" },
  { name: "Extra Sauce", price: "+$1" },
];

export function SignaturePlates() {
  return (
    <Section id="menu">
      <div className="text-center mb-16">
        <SectionLabel>$ignature Plates</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-rose-gold">
          The Menu
        </h2>
        <p className="mt-4 text-[#F5F0EB]/70 max-w-xl mx-auto">
          A short, deliberate menu — every plate refined until it earns its place.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ul>
          {plates.map((p, i) => (
            <motion.li
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="py-7 border-b border-[#B87333]/25 first:border-t first:border-[#B87333]/25"
            >
              <div className="flex items-baseline gap-4">
                <h3 className="font-display text-2xl sm:text-3xl text-[#F5F0EB]">
                  {p.name}
                </h3>
                <span
                  className="flex-1 mx-2 h-px bg-gradient-to-r from-[#B87333]/40 to-transparent self-center"
                  aria-hidden
                />
                <span className="font-display text-xl sm:text-2xl text-rose-gold tabular-nums whitespace-nowrap">
                  {p.price}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-[#F5F0EB]/65 leading-relaxed max-w-2xl">
                {p.desc}
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-gold mb-5">
            Add-Ons
          </p>
          <ul className="space-y-3">
            {addons.map((a) => (
              <li
                key={a.name}
                className="flex items-baseline gap-4 text-[#F5F0EB]/85"
              >
                <span className="text-base sm:text-lg">{a.name}</span>
                <span
                  className="flex-1 mx-2 h-px bg-[#B87333]/20 self-center"
                  aria-hidden
                />
                <span className="font-display text-rose-gold tabular-nums">
                  {a.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
