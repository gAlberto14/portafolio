export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "PHP", "REST APIs"],
  },
  {
    category: "Frontend / Móvil",
    items: ["React Native", "React", "TypeScript", "JavaScript"],
  },
  {
    category: "Datos",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Supabase"],
  },
  {
    category: "Herramientas",
    items: ["n8n", "Git", "Supabase", "Pruebas funcionales"],
  },
];
