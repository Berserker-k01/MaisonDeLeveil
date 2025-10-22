import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-eveil-olive/20 via-eveil-mist/30 to-eveil-sky z-0"></div>

      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-eveil-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eveil-sage rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-eveil-olive mb-6 leading-tight">
          La Maison de l'Éveil
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light">
          Un espace de transformation personnelle et de bienveillance pour éveiller votre plein potentiel
        </p>
        <a
          href="#apropos"
          className="inline-flex items-center px-8 py-4 bg-eveil-olive text-white rounded-full font-semibold hover:bg-eveil-olive/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Découvrir notre mission
          <ArrowDown className="ml-2" size={20} />
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-eveil-olive" size={32} />
      </div>
    </section>
  );
}
