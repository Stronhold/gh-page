import type { Skill } from "../../domain/models/Skill";

export class SkillService {
  getFrontendSkills(): Skill[] {
    return [
      { name: "HTML", icon: "logos:html-5", color: "#E34F26" },
      { name: "CSS", icon: "logos:css-3", color: "#1572B6" },
      { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6" },
      { name: "React", icon: "logos:react", color: "#61DAFB" },
      { name: "Vue", icon: "logos:vue", color: "#4FC08D" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#06B6D4" },
      { name: "Sass", icon: "logos:sass", color: "#CC6699" }
    ];
  }

  getToolsSkills(): Skill[] {
    return [
      { name: "Git", icon: "logos:git-icon", color: "#F05032" },
      { name: "Figma", icon: "logos:figma", color: "#F24E1E" },
      { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC" },
      { name: "Webpack", icon: "logos:webpack", color: "#8DD6F9" },
      { name: "Jest", icon: "logos:jest", color: "#C21325" },
      { name: "Docker", icon: "logos:docker-icon", color: "#2496ED" },
      { name: "GitHub", icon: "logos:github-icon", color: "#181717" },
      { name: "npm", icon: "logos:npm-icon", color: "#CB3837" }
    ];
  }
}
