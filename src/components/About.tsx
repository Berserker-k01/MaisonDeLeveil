import { Target, Heart, BookOpen, Music } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6 font-radibta uppercase">
            À Propos de Nous
          </h2>
        </div>

        {/* Verset biblique en exergue */}
        <div className="bg-gradient-to-br from-eveil-olive/5 to-eveil-sage/5 rounded-xl p-10 mb-16 fade-in border-l-8 border-eveil-olive shadow-lg">
          <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed mb-4 font-nunito">
            « Nous donc aussi, puisque nous sommes environnés d'une si grande nuée de témoins, rejetons tout fardeau, et le péché qui nous enveloppe si facilement, et courons avec persévérance dans la carrière qui nous est ouverte. »
          </p>
          <p className="text-right text-eveil-olive font-bold font-radibta">— Hébreux 12:1</p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 fade-in">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-nunito">
            Dans un monde marqué par le doute, la confusion et la recherche d'authenticité, <span className="font-bold text-eveil-olive">LA MAISON DE L'ÉVEIL</span> est née d'un cri du cœur : celui de redonner voix à l'espérance.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-nunito">
            Nous croyons que le témoignage vivant de l'action de Dieu demeure l'un des plus puissants moyens d'édifier, d'inspirer et de transformer.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-nunito">
            C'est pourquoi nous avons voulu créer un carrefour digital — un espace où chaque histoire devient une lumière, chaque témoignage un souffle de vie, et chaque parole une étincelle de foi.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-nunito">
            Ici, les récits de guérison, de délivrance, de restauration et de renaissance s'unissent pour révéler la puissance du Saint-Esprit à l'œuvre dans les vies d'aujourd'hui.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-nunito">
            Notre mission est claire : <span className="font-bold text-eveil-olive">éveiller les cœurs endormis et raviver la foi dans les âmes assoiffées de vérité.</span>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6 font-nunito">
            Nous voulons bâtir une communauté de croyants authentiques, unis par la soif de connaître Dieu et de Le faire connaître à travers leurs expériences.
          </p>
        </div>

        {/* Nos Objectifs */}
        <div className="mb-16 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-eveil-olive mb-10 text-center font-radibta uppercase">Nos Objectifs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-eveil-olive/10 to-eveil-sage/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-eveil-olive rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-eveil-olive mb-3 text-center font-radibta">Fidélisation</h4>
              <p className="text-gray-700 leading-relaxed text-center font-nunito">
                Former une communauté engagée de plus de <span className="font-bold text-eveil-olive">500 membres actifs</span> en trois mois.
              </p>
            </div>

            <div className="bg-gradient-to-br from-eveil-olive/10 to-eveil-sage/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-eveil-gold rounded-full flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-eveil-olive mb-3 text-center font-radibta">Impact</h4>
              <p className="text-gray-700 leading-relaxed text-center font-nunito">
                Recueillir et partager au moins <span className="font-bold text-eveil-olive">36 témoignages authentifiés</span> de l'action de Dieu.
              </p>
            </div>

            <div className="bg-gradient-to-br from-eveil-olive/10 to-eveil-sage/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-eveil-sage rounded-full flex items-center justify-center">
                  <BookOpen className="text-white" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-eveil-olive mb-3 text-center font-radibta">Édification</h4>
              <p className="text-gray-700 leading-relaxed text-center font-nunito">
                Enraciner entre <span className="font-bold text-eveil-olive">12 et 24 vérités bibliques</span> fondamentales dans le cœur des internautes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-eveil-olive/10 to-eveil-sage/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-eveil-mist rounded-full flex items-center justify-center">
                  <Music className="text-eveil-olive" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-eveil-olive mb-3 text-center font-radibta">Adoration</h4>
              <p className="text-gray-700 leading-relaxed text-center font-nunito">
                Créer un répertoire de <span className="font-bold text-eveil-olive">12 chants chrétiens</span> inspirés, porteurs de grâce et d'adoration véritable.
              </p>
            </div>
          </div>
        </div>

        {/* Notre Vision */}
        <div className="bg-gradient-to-br from-eveil-olive to-eveil-sage rounded-2xl p-12 fade-in text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center font-radibta uppercase">Notre Vision</h3>
          <p className="text-xl md:text-2xl leading-relaxed text-center max-w-4xl mx-auto mb-8 font-nunito italic">
            « Établir un carrefour digital où les témoignages contemporains de l'action de Dieu rencontrent la soif spirituelle, inspirant et transformant des vies par la puissance de l'Esprit Saint. »
          </p>
          <div className="mt-10 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-4 font-nunito">
              <span className="font-bold">LA MAISON DE L'ÉVEIL</span>, c'est bien plus qu'une plateforme.
            </p>
            <p className="text-lg leading-relaxed mb-4 font-nunito">
              C'est une communauté de foi, un mouvement spirituel, un reflet du Royaume dans le monde digital.
            </p>
            <p className="text-lg leading-relaxed font-nunito">
              Chaque témoignage y devient une pierre vivante dans l'édifice d'une génération réveillée et passionnée pour Dieu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
