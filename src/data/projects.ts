export type ProjectType = "company" | "personal" | "colaborative";

export interface Project {
  tag: string;
  type: ProjectType;
  title: string;
  description: string;
  techs: string[];
  placeholder: boolean;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    tag: "Línea Uno",
    type: "company",
    title: "VIMAX — Planogramas con IA",
    description:
      "Sistema para generar y optimizar planogramas en puntos de venta automáticamente. Los aliados comerciales visualizan la distribución ideal de sus productos en góndola.",
    techs: ["Java Spring Boot", "N8n", "PostgreSQL", "Agentes IA"],
    placeholder: false,
  },
  {
    tag: "Línea Uno",
    type: "company",
    title: "App de gestión de visitas de campo",
    description:
      "Aplicación móvil usada por el equipo comercial para registrar visitas a puntos de venta, sincronizada en tiempo real con el portal web de reportes.",
    techs: ["React Native", "TypeScript", "Spring Boot", "PostgreSQL","Watermelon db"],
    placeholder: false,
  },
  {
    tag: "Colaborativo",
    type: "colaborative",
    title: "Geovisor de accidentabilidad vial",
    description:
      "Sistema de Información Geográfico que permite registrar solicitudes, visualizar un mapa y proporcionar recursos sobre la seguridad vial para facilitar los procesos de toma de decisiones, mostrar puntos críticos de accidentabilidad y generar conciencia vial para la disminución de la accidentabilidad de la comuna 13 de la ciudad de Cali.",
    techs: ["PHP", "MapServer", "PostgreSQL"],
    placeholder: true,
  },
  {
    tag: "Personal",
    type: "personal",
    title: "Sistema de gestión de inventario",
    description:
      "Un bot, una herramienta CLI, una app de práctica. Cualquier cosa que hayas construido por cuenta propia vale como portafolio.",
    techs: ["Tecnología 1", "Tecnología 2"],
    placeholder: true,
  },
];
