import { useTypewriter } from "../hooks/useTypewriter";

const FIRST_NAME  = "GUSTAVO";
const LAST_NAME   = "HURTADO ANTE";
const FIRST_DELAY = 0;
const LAST_DELAY  = FIRST_NAME.length * 80 + 200;

const TECH_CHIPS = [
  "Java", "Spring Boot", "React Native",
  "TypeScript", "PostgreSQL", "n8n", "REST APIs", "Git",
];

export function Hero() {
  const first = useTypewriter(FIRST_NAME, 80, FIRST_DELAY);
  const last  = useTypewriter(LAST_NAME,  75, LAST_DELAY);

  const doneFirst = first.length === FIRST_NAME.length;
  const doneLast  = last.length  === LAST_NAME.length;

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-label">
          Desarrollador Full-Stack · Cali, Colombia
        </div>

        <h1 className="hero-name">
          {first}
          {!doneFirst && <span className="cursor" />}
        </h1>

        <div className="hero-sub">
          {doneFirst && last}
          {(doneFirst && !doneLast) && <span className="cursor" />}
          {doneLast && <span className="cursor" />}
        </div>

        <p className="hero-desc">
          Tecnólogo en Análisis y Desarrollo de Software con experiencia real en{" "}
          <strong>aplicaciones móviles, backends robustos e integración de datos</strong>.
          Construyo sistemas que equipos comerciales usan a diario.
        </p>

        <div className="hero-ctas">
          <a href="#proyectos" className="btn-primary">Ver proyectos</a>
          <a href="#contacto"  className="btn-ghost">Contactar</a>
        </div>

        <div className="chips">
          {TECH_CHIPS.map((tech) => (
            <span key={tech} className="chip">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
