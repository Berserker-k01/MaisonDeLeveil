import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Nos actions', href: '#actions' },
    { label: 'Nous rejoindre', href: '#rejoindre' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-eveil-olive rounded-full flex items-center justify-center text-white font-bold text-xl">
              ME
            </div>
            <div>
              <h1 className="text-xl font-bold text-eveil-olive">La Maison de l'Éveil</h1>
              <p className="text-xs text-gray-600">ONG d'éveil et de transformation</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-eveil-olive transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-eveil-olive"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-eveil-olive transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
