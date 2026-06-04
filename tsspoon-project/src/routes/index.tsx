import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { SignaturePlates } from "@/components/site/SignaturePlates";
import { OurStory } from "@/components/site/OurStory";
import { Preorder } from "@/components/site/Preorder";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SpoonDivider } from "@/components/site/Decorative";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T'$ Spoon — Elevated Plates | Bold Flavors" },
      {
        name: "description",
        content:
          "T'$ Spoon serves signature plates crafted with intention, passion, and bold flavor. Based in Seattle/Bellevue, WA. Preorder now — launching June 21st.",
      },
      { property: "og:title", content: "T'$ Spoon — Elevated Plates | Bold Flavors" },
      {
        property: "og:description",
        content: "Signature plates crafted with intention, passion, and flavor you won't forget.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#0D0608] text-[#F5F0EB] min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SpoonDivider />
        <OurStory />
        <SpoonDivider />
        <SignaturePlates />
        <SpoonDivider />
        <Preorder />
        <SpoonDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
