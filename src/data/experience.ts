export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "Jul 2025 — Actualidad",
    role: "Desarrollador TI",
    company: "Línea Uno Compañía S.A.S. · Cali",
    bullets: [
      "Desarrollo y mantenimiento full-stack de la app móvil de gestión de visitas de campo.",
      "Diseño y configuración de reportes en el portal web a partir de datos de la app móvil.",
      "Gestión de despliegues a producción con validación mediante pruebas funcionales.",
      "Soporte técnico: diagnóstico y resolución de incidencias de usuarios y equipos internos.",
      "Integración entre aplicación móvil y portal web garantizando coherencia de datos.",
    ],
  },
  {
    period: "Ene 2025 — Jul 2025",
    role: "Aprendiz en Etapa Práctica",
    company: "Línea Uno Compañía S.A.S. · Cali",
    bullets: [
      "Elaboración de informes en el portal web para aliados comerciales.",
      "Validación y actualización de registros en bases de datos relacionales.",
      "Desarrollo de consultas SQL para reportes operativos y comerciales.",
      "Seguimiento a usuarios de la app móvil e identificación de fallas funcionales.",
      "Contribución al desarrollo del backend de la aplicación móvil.",
    ],
  },
];
