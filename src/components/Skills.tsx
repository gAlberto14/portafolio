import { SectionHeader } from "./SectionHeader";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <section className="section" id="habilidades">
      <div className="container">
        <SectionHeader eyebrow="habilidades" title="Stack técnico" />

        <div className="skills-grid">
          {skills.map(({ category, items }, index) => (
            <div key={category} className={`skill-group reveal delay-${index + 1}`}>
              <div className="skill-group-name">{category}</div>
              {items.map((item) => (
                <div key={item} className="skill-item">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
