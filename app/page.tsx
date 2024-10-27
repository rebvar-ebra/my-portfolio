"use client";
import { useEffect, useState } from "react";
import {
  Header,
  Navbar,
  Section,
  ExperienceItem,
  Projects,
  Contact,
  Footer,
} from "./components/index";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-900 text-slate-400 min-h-screen flex mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-24 lg:w-1/3">
        <Header />
        <Navbar activeSection={activeSection} />
        <Footer />
      </div>

      <main className="flex-1 lg:ml-64">
        <Section id="about" title="About Me">
          <p className="mb-4">
            Hello! My name is rebvar and I enjoy creating things that live on
            the internet...
          </p>
        </Section>

        <Section id="experience" title="Where I've Worked">
          <ExperienceItem
            title="Senior Developer"
            company="Upstatement"
            date="May 2018 - Present"
            duties={[
              "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
              "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
            ]}
            tags={["Node.js", "React", "JavaScript", "TypeScript"]}
          />

          {/* Add other ExperienceItems here */}
        </Section>

        <Section id="projects" title="Some Things I've Built">
          <Projects />
        </Section>

        <Section id="contact" title="Get In Touch">
          <Contact />
        </Section>
      </main>
    </div>
  );
}
