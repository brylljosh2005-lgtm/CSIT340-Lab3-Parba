export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="rounded-xl border border-stone-200 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="rounded-md bg-stone-100 px-2 py-1 text-xs font-medium text-stone-600">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <a href={link} className="text-sm font-medium hover:underline">
          View code &rarr;
        </a>
      </div>
    </div>
  );
}