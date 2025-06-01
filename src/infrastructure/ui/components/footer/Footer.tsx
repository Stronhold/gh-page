import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { NavigationService } from "../../../../application/services/NavigationService";
import { ContactService } from "../../../../application/services/ContactService";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigationService = new NavigationService();
  const contactService = new ContactService();

  const links = navigationService.getFooterLinks();
  const socialLinks = contactService.getSocialLinks();

  return (
    <footer className="bg-content1 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Sergio Ausin</h2>
            <p className="text-foreground-500 mb-4 max-w-md">
              Frontend Developer creating exceptional digital experiences with
              clean, efficient code and user-centered design principles.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground-500 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <Icon icon={link.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="text-end">
            <h3 className="text-lg font-semibold ml-auto mb-4 ">Quick Links</h3>
            <ul className="space-y-2">
              {links.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    color="foreground"
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-500 text-sm">
            &copy; {currentYear} Sergio Ausin. All rights reserved.
          </p>
          <p className="text-foreground-500 text-sm">
            Designed and built with <span className="text-danger">❤</span> by
            Sergio Ausin and HeroUI
          </p>
        </div>
      </div>
    </footer>
  );
};
