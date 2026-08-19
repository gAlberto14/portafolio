import { SectionHeader } from "./SectionHeader";

const CONTACT_LINKS = [
  { label: "email",    value: "halberto1407@gmail.com",  href: "mailto:halberto1407@gmail.com" },
  { label: "tel",      value: "(+57) 318 553 1475",      href: "tel:+573185531475"              },
  { label: "github",   value: "github.com/gAlberto14",   href: "https://github.com/gAlberto14" },
  { label: "linkedin", value: "linkedin.com/in/✏️",      href: "https://linkedin.com"           },
];

export function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <SectionHeader eyebrow="contacto" title="Hablemos" />

        <div className="contact-grid reveal delay-1">
          {/* Columna izquierda — links */}
          <div className="contact-cell">
            <div className="contact-cell-title">Canales directos</div>
            {CONTACT_LINKS.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-link"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="contact-link-label">{label}</span>
                <span>{value}</span>
              </a>
            ))}
          </div>

          {/* Columna derecha — disponibilidad + nota Buenaventura */}
          <div className="contact-cell">
            <div className="contact-cell-title">Disponibilidad</div>
            <p style={{ fontSize: ".85rem", color: "#777", lineHeight: 1.8 }}>
              Abierto a nuevas oportunidades, proyectos freelance y colaboraciones
              técnicas. Tiempo de respuesta habitual: menos de 24 horas.
            </p>
            <div className="bvnote">
              Los colores de este portafolio son los de la<br />
              bandera de <span>Buenaventura, Valle del Cauca</span>.<br />
              <span style={{ color: "#555" }}>Verde · Amarillo · Negro.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
