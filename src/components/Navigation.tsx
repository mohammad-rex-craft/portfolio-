import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass neon-blue' : 'bg-transparent'
    }`}>
      <div className="mx-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-orbitron lg:text-xl md:text-lg text-sm font-bold gradient-text">
            &lt;Mohammad Al Halabi /&gt;
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`transition-all duration-300 transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="glass mt-2 rounded-lg p-4 transform transition-all duration-300">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-2 text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}