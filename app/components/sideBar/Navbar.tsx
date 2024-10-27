import Link from "next/link";

export default function Navbar({ activeSection }: { activeSection: string }) {
  const sections = ["about", "experience", "projects", "contact"];
  return (
    <nav className="nav hidden lg:block lg:mt-0">
      <ul className="mt-8 w-max">
        {sections.map((section) => (
          <li key={section}>
            <Link
              href={`#${section}`}
              className={`group flex items-center py-3 ${
                activeSection === section ? "text-teal-300" : ""
              }`}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 ${
                  activeSection === section ? "w-16 bg-slate-200" : ""
                }`}
              ></span>
              <span
                className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 ${
                  activeSection === section ? "text-slate-200" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
