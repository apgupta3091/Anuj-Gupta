import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Projects", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/apgupta3091",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anujgupta19/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              to="home"
              smooth
              duration={500}
              className="cursor-pointer font-mono text-lg font-bold tracking-tight text-foreground"
            >
              anuj<span className="text-primary">.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anuj Gupta. Built with React.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                offset={-80}
                duration={500}
                className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-2">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
