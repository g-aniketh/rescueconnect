// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/common/Logo";
import {
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
  FaMediumM,
} from "react-icons/fa"; // Example social icons

const Footer: React.FC = () => {
  const socialLinks = [
    { href: "#", icon: FaTwitter, label: "Twitter" },
    { href: "#", icon: FaMediumM, label: "Medium" },
    { href: "#", icon: FaGithub, label: "GitHub" },
    { href: "#", icon: FaTelegramPlane, label: "Telegram" },
    { href: "#", icon: FaDiscord, label: "Discord" },
  ];

  const otherLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Referral Terms", href: "#" },
    { name: "Media Kit", href: "#" },
  ];

  return (
    <footer className="bg-background-paper border-t border-secondary-light mt-16">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo & Email */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>
            <a
              href="mailto:rescueconnect@gmail.com"
              className="text-text-secondary hover:text-primary block"
            >
              rescueconnect@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Other Links */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            {otherLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-light pt-4 text-center text-xs text-text-secondary">
          © {new Date().getFullYear()} Rescue Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
