import { SectionHeader } from "./SectionHeader";
import { projects, type Project } from "../data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { tag, type, title, description, techs, placeholder, githubUrl } = project;

  return (
    <div className={`project-card${placeholder ? " placeholder" : ""} reveal delay-${index + 1}`}>
      <div className="project-body">
        <span className={`project-tag project-tag--${type}`}>
          // {tag}
        </span>
        <div className="project-title">{title}</div>
        <p className="project-desc">{description}</p>
      </div>

      {placeholder && (
        <div className="project-hint">✏️ reemplaza con tu proyecto real</div>
      )}

      <div className="project-footer">
        {techs.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tech-tag"
            style={{ marginLeft: "auto", color: "#C8E63C" }}
          >
            ver repo →
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionHeader eyebrow="proyectos" title="Lo que he construido" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
