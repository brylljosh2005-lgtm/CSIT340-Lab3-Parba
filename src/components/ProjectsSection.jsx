import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I've built so far." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard 
          title="Inventory Management System" 
          description="A simple android app to keep track of inventory and manage stock levels for small businesses."
          tech={['React', 'Tailwind CSS', 'JavaScript']}
          link="https://github.com"
        />
        <ProjectCard 
          title="Book Nook" 
          description="A prototype for a cafe service management with with books in the cafe."
          tech={['JavaScript', 'HTML', 'CSS']}
          link="https://github.com"
        />
        <ProjectCard 
          title="Elemental Battle" 
          description="A turn-based game developed as a class project."
          tech={['Java', 'JavaFX']}
          link="https://github.com"
        />
      </div>
    </section>
  );
}