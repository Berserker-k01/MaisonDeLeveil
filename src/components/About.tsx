import { Eye, Target, Compass, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6">
            À Propos de Nous
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Fondée en 2018, La Maison de l'Éveil est née d'une vision commune : créer un espace où chaque personne
            peut trouver les ressources pour s'épanouir pleinement et contribuer positivement au monde.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-eveil-sky to-white p-8 rounded-2xl shadow-lg fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-eveil-olive rounded-full flex items-center justify-center">
                <Eye className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-eveil-olive mb-4 text-center">Notre Vision</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Un monde où chaque individu vit en harmonie avec soi-même, les autres et la nature,
              guidé par la conscience et la bienveillance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-eveil-mist/40 to-white p-8 rounded-2xl shadow-lg fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-eveil-gold rounded-full flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-eveil-olive mb-4 text-center">Notre Mission</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Offrir des outils, des espaces et des accompagnements pour éveiller le potentiel de chacun
              et favoriser une transformation durable.
            </p>
          </div>

          <div className="bg-gradient-to-br from-eveil-sky to-white p-8 rounded-2xl shadow-lg fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-eveil-sage rounded-full flex items-center justify-center">
                <Compass className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-eveil-olive mb-4 text-center">Nos Valeurs</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              Authenticité, respect, inclusion, croissance personnelle et engagement communautaire
              sont au cœur de tout ce que nous entreprenons.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-eveil-olive/10 to-eveil-mist/20 rounded-2xl p-12 fade-in">
          <h3 className="text-3xl font-bold text-eveil-olive mb-6 text-center">Notre Équipe</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Nous sommes une équipe passionnée de facilitateurs, thérapeutes, éducateurs et bénévoles,
            tous unis par la conviction que l'éveil personnel est la clé d'un avenir meilleur.
            Chaque membre apporte son expertise unique pour créer un environnement d'apprentissage
            riche et bienveillant.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {['Direction', 'Animation', 'Accompagnement', 'Bénévoles'].map((role, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-eveil-mist rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-eveil-olive" size={40} aria-hidden="true" />
                </div>
                <h4 className="font-bold text-eveil-olive">{role}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
