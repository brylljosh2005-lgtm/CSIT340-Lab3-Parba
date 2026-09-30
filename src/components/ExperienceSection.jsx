import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="My academic and practical milestones." />
      <div className="mt-8 space-y-8">
        <TimelineItem 
          period="2024 — Present"
          role="Project Manager"
          company="CIT-U"
          description="Created a project management system for animals to rescue and adoption. I was the one who made the project management system and the database for the system."
        />
        <TimelineItem 
          period="2023 — 2024"
          role="Game Developer (Class Project)"
          company="University Group"
          description="Led a team of five groups to make an game of Turn-based called ELemental Battle. I was the one who made the game mechanics and the game logic."
        />
        <TimelineItem 
          period="2022 — 2023"
          role="WWeb Developer (Class Project)"
          company="University Group"
          description="Created a simple website for a local business called 'Book Nook' to help them manage their cafe service with books."
        />
      </div>
    </section>
  );
}