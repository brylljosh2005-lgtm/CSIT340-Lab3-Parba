import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Get in touch with me." />
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <ContactLink 
          label="Email" 
          value="brylljosh2005@gmail.com" 
          href="mailto:brylljosh2005@gmail.com" 
        />
        <ContactLink 
          label="GitHub" 
          value="github.com/brylljosh" 
          href="https://github.com" 
        />
        <ContactLink 
          label="LinkedIn" 
          value="linkedin.com/in/brylljosh" 
          href="https://linkedin.com" 
        />
      </div>
    </section>
  );
}