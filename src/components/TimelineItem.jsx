export default function TimelineItem({ period, role, company, description }) {
  return (
    <div className="relative pl-6 border-l border-stone-200">
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-stone-300 bg-white" />
      <span className="text-xs font-medium text-stone-500">{period}</span>
      <h3 className="mt-1 text-lg font-semibold">{role} &middot; <span className="font-normal text-stone-600">{company}</span></h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{description}</p>
    </div>
  );
}