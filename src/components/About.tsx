import { SectionHeader } from "./SectionHeader";

const STATS = [
  { value: "1+",  label: "año en producción"   },
  { value: "3",   label: "proyectos en empresa" },
  { value: "Full",label: "stack (móvil + web)"  },
  { value: "B1",  label: "inglés técnico"       },
];

export function About() {
  return (
    <section className="section" id="sobre mí">
      <div className="container">
        <SectionHeader eyebrow="sobre mí" title="Código que resuelve problemas reales" />

        <div className="about-grid">
          <div className="reveal delay-1">
            <p className="about-p">
              Nací en <strong>Buenaventura, Valle del Cauca</strong> — los colores de esta página
              son los de mi ciudad. Hoy trabajo en Cali como desarrollador full-stack, construyendo
              software que equipos comerciales usan todos los días.
            </p>
            <p className="about-p">
              Tengo experiencia en el <strong>ciclo completo</strong>: desde el diseño de consultas
              SQL y construcción de APIs en Java Spring Boot, hasta interfaces móviles con React
              Native y automatización de flujos con n8n.
            </p>
            <p className="about-p">
              Me interesa <strong>entender el negocio detrás del código</strong>.
              Inglés técnico intermedio — leo documentación con fluidez.
            </p>
          </div>

          <div className="reveal delay-2">
            <div className="stat-grid">
              {STATS.map(({ value, label }) => (
                <div key={label} className="stat-cell">
                  <div className="stat-val">{value}</div>
                  <div className="stat-lbl">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
