import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-eveil-olive to-eveil-sage text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">La Maison de l'Éveil</h3>
            <p className="text-white/90 leading-relaxed">
              Un espace de transformation personnelle et de bienveillance pour éveiller votre plein potentiel.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-white/90 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-white/90 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#actions" className="text-white/90 hover:text-white transition-colors">
                  Nos actions
                </a>
              </li>
              <li>
                <a href="#rejoindre" className="text-white/90 hover:text-white transition-colors">
                  Nous rejoindre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/90 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-white/90 mb-4">
              Restez informé de nos événements et actualités
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-l-lg flex-1 text-gray-800 focus:outline-none"
              />
              <button className="bg-eveil-gold hover:bg-eveil-gold/90 px-6 py-2 rounded-r-lg font-semibold transition-all">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/90 flex items-center justify-center">
            Made with <Heart className="mx-2 fill-current" size={16} /> {currentYear} La Maison de l'Éveil - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
