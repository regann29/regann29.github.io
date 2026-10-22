import { createFileRoute } from "@tanstack/react-router";
import ScrollProgress from "@/components/layout/scroll-progress";
import ManifestoFlow from "@/components/effects/manifesto-flow";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Stack from "@/components/sections/stack";
import Projects from "@/components/sections/projects";
import Roadmap from "@/components/sections/roadmap";
import Contact from "@/components/sections/contact";

const title = "Regan K.C. | Portfolio";
const description =
  "Regan K.C. is a BITM student in Hetauda, Nepal. He builds security tools, AI agents and web apps with Python, and co-founded PIXEL7 MEDIA.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content:
          "Security tools, AI agents and web apps built with Python. BITM student and co-founder of PIXEL7 MEDIA, based in Hetauda, Nepal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://regann29.github.io/" },
      { property: "og:image", content: "https://regann29.github.io/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://regann29.github.io/og-image.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <ScrollProgress />
      <main className="bg-background relative">
        <Hero />
        <div className="relative z-10 bg-background border-t border-border">
          <section id="about">
            <About />
          </section>
          <ManifestoFlow />
          <section id="stack">
            <Stack />
          </section>
          <ManifestoFlow reverse />
          <section id="projects">
            <Projects />
          </section>
          <ManifestoFlow />
          <section id="roadmap">
            <Roadmap />
          </section>
          <ManifestoFlow reverse />
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
}
