import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1. Explain what it does, the technologies used, and any notable features.",
      link: "https://github.com/yourusername/project1",
      image: "/placeholder.svg", // Use just the path for next/image
      width: 200,
      height: 48,
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2. Explain what it does, the technologies used, and any notable features.",
      link: "https://github.com/yourusername/project2",
      image: "/placeholder.svg", // Use just the path for next/image
      width: 200,
      height: 48,
    },
  ];

  return (
    <ul className="group/list">
      {projects.map((project, index) => (
        <li key={index} className="mb-12">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={project.title}
                >
                  {project.title}
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                {project.description}
              </p>
            </div>
            <div className="sm:col-span-2">
              <Image
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                width={project.width}
                height={project.height}
                className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
                src={project.image}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
