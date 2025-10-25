import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-eveil-olive to-eveil-sage text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-radibta uppercase">LA MAISON DE L'ÉVEIL</h3>
            <p className="text-white/90 leading-relaxed font-nunito">
              Un espace de transformation personnelle et de bienveillance pour éveiller votre plein potentiel.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-radibta">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors font-nunito">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/apropos" className="text-white/90 hover:text-white transition-colors font-nunito">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/actions" className="text-white/90 hover:text-white transition-colors font-nunito">
                  Nos actions
                </Link>
              </li>
              <li>
                <Link to="/rejoindre" className="text-white/90 hover:text-white transition-colors font-nunito">
                  Nous rejoindre
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-white transition-colors font-nunito">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 font-radibta">Newsletter</h4>
            <p className="text-white/90 mb-4 font-nunito">
              Restez informé de nos événements et actualités
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-l-lg flex-1 text-gray-800 focus:outline-none font-nunito"
              />
              <button className="bg-eveil-gold hover:bg-eveil-gold/90 px-6 py-2 rounded-r-lg font-semibold font-radibta transition-all">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/90 flex items-center justify-center font-nunito">
            Made by <a href="https://digidesk.pro" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-white transition-colors mx-1">digidesk.pro</a> {currentYear} LA MAISON DE L'ÉVEIL - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
