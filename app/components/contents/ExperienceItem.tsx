export default function ExperienceItem({
  title,
  company,
  date,
  duties,
  tags,
}: {
  title: string;
  company: string;
  date: string;
  duties: string[];
  tags: string[];
}) {
  return (
    <div className="relative pl-8 border-l border-slate-700 hover:bg-slate-800 hover:border-teal-300 transition-colors duration-200 rounded-md p-4">
      <div className="absolute w-3 h-3 bg-teal-300 rounded-full -left-[7px] top-1.5 transition-colors duration-200"></div>
      <h4 className="text-xl font-semibold text-slate-200 hover:text-teal-300 transition-colors duration-200">
        {title} <span className="text-teal-300 hover:text-teal-400 transition-colors duration-200">@ {company}</span>
      </h4>
      <p className="text-sm text-slate-400 mb-2">{date}</p>
      <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
      <div className="flex flex-wrap mt-4 space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-teal-700 text-slate-200 text-xs font-semibold px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
