import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', to: '/' },
    { label: 'À propos', to: '/apropos' },
    { label: 'Nos actions', to: '/actions' },
    { label: 'Nous rejoindre', to: '/rejoindre' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Aller à l'accueil" className="flex items-center space-x-3 group">
            <img
              src="/logorvuv2.png"
              alt="Logo La Maison de l'Éveil"
              className="w-12 h-12 rounded-full object-contain transition-transform group-hover:scale-105"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-xl font-bold text-eveil-olive font-radibta uppercase">LA MAISON DE L'ÉVEIL</h1>
              <p className="text-xs text-gray-600 font-nunito">ONG d'éveil et de transformation</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-gray-700 transition-colors duration-300 font-medium font-radibta underline-offset-4 hover:underline ${isActive ? 'text-eveil-olive' : 'hover:text-eveil-olive'}`
                }
              >
                {item.label}
              </NavLink>
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
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-700 transition-colors duration-300 font-medium font-radibta py-2 ${isActive ? 'text-eveil-olive' : 'hover:text-eveil-olive'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
