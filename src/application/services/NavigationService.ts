import type { MenuItem } from "../../domain/models/MenuItem";

export class NavigationService {
  getMenuItems(): MenuItem[] {
    return [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ];
  }

  getFooterLinks(): MenuItem[] {
    return [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ];
  }
}
