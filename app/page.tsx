import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-400 min-h-screen flex mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="">Rebvar Ebrahimi</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              I build things for the web.
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.
            </p>

            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <Link
                    href="#about"
                    className="group flex items-center py-3 active"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#experience"
                    className="group flex items-center py-3 active"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="group flex items-center py-3 active"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="group flex items-center py-3 active"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <ul>
            <li></li>
          </ul>
        </header>
      </div>
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        <header className="mb-12"></header>

        <section id="about" className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-200 mb-4">
            About Me
          </h3>
          <p className="mb-4">
            Hello! My name is rebvar and I enjoy creating things that live on
            the internet. My interest in web development started back in 2016
            when I decided to learn Word Press and editing custom themes — turns
            out hacking together a custom reblog button taught me a lot about
            HTML & CSS!
          </p>
        </section>

        <section id="experience" className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-200 mb-4">
            Where I've Worked
          </h3>
          <div className="space-y-8">
            <div className="relative pl-8 border-l border-slate-700">
              <div className="absolute w-3 h-3 bg-teal-300 rounded-full -left-[7px] top-1.5"></div>
              <h4 className="text-xl font-semibold text-slate-200">
                Senior Developer{" "}
                <span className="text-teal-300">@ Upstatement</span>
              </h4>
              <p className="text-sm text-slate-400 mb-2">May 2018 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Developed and shipped highly interactive web applications for
                  Apple Music using Ember.js
                </li>
                <li>
                  Built and shipped the Apple Music Extension within Facebook
                  Messenger leveraging third-party and internal APIs
                </li>
              </ul>
            </div>
            <div className="relative pl-8 border-l border-slate-700">
              <div className="absolute w-3 h-3 bg-teal-300 rounded-full -left-[7px] top-1.5"></div>
              <h4 className="text-xl font-semibold text-slate-200">
                Studio Developer <span className="text-teal-300">@ Scout</span>
              </h4>
              <p className="text-sm text-slate-400 mb-2">
                January - April 2018
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Worked with a team of three designers to build a marketing
                  website and e-commerce platform for blistabloc
                </li>
                <li>
                  Helped solidify a brand direction for blistabloc that spans
                  both packaging and web
                </li>
              </ul>
            </div>
            <div className="relative pl-8 border-l border-slate-700">
              <div className="absolute w-3 h-3 bg-teal-300 rounded-full -left-[7px] top-1.5"></div>
              <h4 className="text-xl font-semibold text-slate-200">
                UI Engineer Co-op <span className="text-teal-300">@ Apple</span>
              </h4>
              <p className="text-sm text-slate-400 mb-2">
                July - December 2017
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Developed and shipped highly interactive web applications for
                  Apple Music using Ember.js
                </li>
                <li>
                  Built and shipped the Apple Music Extension within Facebook
                  Messenger leveraging third-party and internal APIs
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-200 mb-4">
            Some Things I've Built
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800 p-4 rounded">
              <h4 className="text-xl font-semibold text-slate-200 mb-2">
                Project 1
              </h4>
              <p>A brief description of the project.</p>
            </div>
            <div className="bg-slate-800 p-4 rounded">
              <h4 className="text-xl font-semibold text-slate-200 mb-2">
                Project 2
              </h4>
              <p>A brief description of the project.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-200 mb-4">
            Get In Touch
          </h3>
          <p className="mb-4">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block bg-teal-300 text-slate-900 px-4 py-2 rounded hover:bg-teal-400 transition-colors duration-300"
          >
            Say Hello
          </a>
        </section>
      </main>
    </div>
  );
}
