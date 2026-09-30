export default function ContactLink({ label, value, href }) {
  return (
    <div className="rounded-xl border border-stone-200 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-medium text-stone-500">{label}</h3>
        <p className="mt-2 font-medium">{value}</p>
      </div>
      <div className="mt-6">
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
          Connect &rarr;
        </a>
      </div>
    </div>
  );
}