import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/mise_en_situation_vidéo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/logorvuv2.png"
        aria-label="Vidéo de mise en situation en arrière-plan"
      >
        Votre navigateur ne supporte pas la lecture vidéo HTML5.
      </video>

      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-eveil-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eveil-sage rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-eveil-olive mb-6 leading-tight font-radibta uppercase">
          LA MAISON DE L'ÉVEIL
        </h1>
        <p className="text-xl md:text-2xl text-gray-900 mb-8 max-w-3xl mx-auto font-medium font-nunito drop-shadow-lg">
          Un espace de transformation personnelle et de bienveillance pour éveiller votre plein potentiel
        </p>
        <Link
          to="/apropos"
          className="inline-flex items-center px-8 py-4 bg-eveil-olive text-white rounded-full font-semibold font-radibta hover:bg-eveil-olive/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Découvrir notre mission
          <ArrowDown className="ml-2" size={20} />
        </Link>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-eveil-olive" size={32} />
      </div>
    </section>
  );
}
