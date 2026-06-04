import { Section, SectionLabel } from "./Section";

const sides = ["Mashed Potatoes", "Asparagus", "Baked Mac & Cheese", "Golden Fries"];
const sauces = ["Ranch", "House Sauce"];

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-card rounded-md p-8 sm:p-10">
      <h3 className="font-display text-2xl sm:text-3xl text-rose-gold mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-4 text-[#F5F0EB]/85">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-gold flex-shrink-0" />
            <span className="text-base sm:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SidesSauces() {
  return (
    <Section>
      <div className="text-center mb-14">
        <SectionLabel>The Supporting Cast</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl text-rose-gold">Sides & Sauces</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <List title="Sides" items={sides} />
        <List title="Sauces" items={sauces} />
      </div>
    </Section>
  );
}
