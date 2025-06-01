import type { ContactInfo } from "../../domain/models/ContactInfo";
import type { SocialLink } from "../../domain/models/SocialLink";

export class ContactService {
  getContactInfo(): ContactInfo[] {
    return [
      {
        icon: "lucide:mail",
        title: "Email",
        value: "sergio@ausin.dev",
        link: "mailto:sergio@ausin.dev"
      },
      {
        icon: "lucide:map-pin",
        title: "Location",
        value: "Spain"
      }
    ];
  }

  getSocialLinks(): SocialLink[] {
    return [
      { name: "GitHub", icon: "lucide:github", href: "http://github.com/stronhold/" },
      { name: "LinkedIn", icon: "lucide:linkedin", href: "https://www.linkedin.com/in/sergio-ausin-35687a80/" }
    ];
  }
}
