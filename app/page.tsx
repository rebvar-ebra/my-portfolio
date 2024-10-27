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
  About,
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
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <Header />
              <Navbar activeSection={activeSection} />
            </div>
            <Footer />
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Section id="about" title="About Me" >
              <About />
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
      </div>
    </div>
  );
}
