import type { Experience } from "../../domain/models/Experience";

export class ExperienceService {
  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        role: "Senior FullStack Developer",
        company: "Metricool SL",
        period: "Apr 2024 - Present",
        description: [
          "Design and development of the company's main products",
        ],
        technologies: ["React", "Vue", "Java", "Tailwind CSS", "Vuetify"]
      },
      {
        id: 2,
        role: "Senior Frontend Developer",
        company: "Veeva Systems",
        period: "Feb 2023 - Apr 2024",
        description: [
          "Design and development of the company's main products"
        ],
        technologies: ["React", "MUI", "Figma", "TS", "Zustand", "GraphQL", "Vite"]
      },
      {
        id: 3,
        role: "Senior Frontend Developer",
        company: "Stubhub",
        period: "May 2019 - Feb 2023",
        description: [
          "Design and development of the company's main web page",
          "Development of the mobile event page with react, redux, PostCSS, atomic design, grid layout...",
          "Bamboo (Stubhub's design system)"
        ],
        technologies: ["React", "TS", "CSS3", "JS", "Redux"]
      },
      {
        id: 4,
        role: "Frontend Tech Lead",
        company: "Lantek",
        period: "Set 2017 - May 2019",
        description: [
          "Design and develop features for the new products suite called Lantek360. I also took decisions about frontend architecture",
          "Main projects where I worked: iQuoting and MetalShop. For those products/projects I was using Angular2+, SASS and NgRX for application state management",
          "Lantek's Auth System. Thanks to this project the authentication of Lantek360 product's are centralised by using Identity Server.",
          "Small developments in Lantek's CAD/CAM products."
        ],
        technologies: ["React", "TS", "CSS3", "JS", "Redux"]
      },
      {
        id: 5,
        role: "FullStack Developer",
        company: "NMC HealthCare",
                period: "Apr 2017 - Sep 2017",
        description: [ 
          "Internal products maintenance and development for medical/patients management.",
          "SSID: project developed using .NET Framework MVC."
        ],
        technologies: [".NET MVC"]
      },
      {
        id: 6,
        role: "Research Intern",
        company: "Deustotech",
        period: "Dec 2014 - Jul 2016",
        description: [
          "Development of Big Data projects with Apache Spark to avoid fraud.",
          "Development of Android apps.",
          "Web developmnent with Symfony"
        ],
        technologies: [".net", "PHP", "Java"]
      }
    ];
  }
}
