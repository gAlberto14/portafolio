import { SectionHeader } from "./SectionHeader";
import { experience, type ExperienceItem } from "../data/experience";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const { period, role, company, bullets } = item;

  return (
    <div className={`exp-item reveal delay-${index + 1}`}>
      <div className="exp-period">{period}</div>
      <div>
        <div className="exp-role">{role}</div>
        <div className="exp-company">{company}</div>
        <ul className="exp-bullets">
          {bullets.map((bullet) => (
            <li key={bullet} className="exp-bullet">{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <SectionHeader eyebrow="experiencia" title="Trayectoria" />

        <div className="exp-list">
          {experience.map((item, index) => (
            <ExperienceCard key={item.role} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
