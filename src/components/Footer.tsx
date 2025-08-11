import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohammad-rex-craft', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammad-al-halabi-3334351a7/', label: 'LinkedIn' },
    { icon: Mail, href: 'mohammad123alhalabi123@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative z-10">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="font-orbitron text-2xl font-bold gradient-text mb-4">
              &lt;Mohammad Al Halabi /&gt;
            </div>
            <p className="text-gray-400 text-sm">
              Crafting the future of web development, one line of code at a time.
            </p>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-neon-blue hover:neon-blue transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> using React, TypeScript & Three.js
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2025 DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}