export default function Projects() {
  const projects = [
    { title: "Project 1", description: "A brief description of the project." },
    { title: "Project 2", description: "A brief description of the project." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-slate-800 p-4 rounded">
          <h4 className="text-xl font-semibold text-slate-200 mb-2">{project.title}</h4>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
