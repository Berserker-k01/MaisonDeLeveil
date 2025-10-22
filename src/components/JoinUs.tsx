import { UserPlus, Users, HandHeart } from 'lucide-react';

export default function JoinUs() {
  const options = [
    {
      icon: <UserPlus className="w-12 h-12 text-white" />,
      title: 'Bénévolat',
      description: 'Rejoignez notre équipe de bénévoles passionnés et contribuez à nos projets d\'éveil et de transformation.',
      cta: 'Devenir bénévole',
      color: 'bg-eveil-olive',
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: 'Adhésion',
      description: 'Devenez membre de La Maison de l\'Éveil et participez activement à nos activités et à notre communauté.',
      cta: 'Adhérer',
      color: 'bg-eveil-sage',
    },
    {
      icon: <HandHeart className="w-12 h-12 text-white" />,
      title: 'Soutenir',
      description: 'Votre générosité nous permet de poursuivre notre mission et d\'accompagner toujours plus de personnes.',
      cta: 'Faire un don',
      color: 'bg-eveil-gold',
    },
  ];

  return (
    <section id="rejoindre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6">
            Nous Rejoindre
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ensemble, créons un monde plus conscient et bienveillant. Plusieurs façons de participer à notre mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-eveil-sky to-eveil-mist/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${option.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                {option.icon}
              </div>
              <h3 className="text-2xl font-bold text-eveil-olive mb-4 text-center">{option.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">{option.description}</p>
              <div className="text-center">
                <button className={`${option.color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}>
                  {option.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-eveil-olive to-eveil-sage rounded-2xl p-12 text-center text-white shadow-2xl fade-in">
          <h3 className="text-3xl font-bold mb-4">Chaque geste compte</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Que vous donniez de votre temps, de votre énergie ou de votre soutien financier,
            vous contribuez à transformer des vies et à créer un impact durable.
          </p>
          <button className="bg-white text-eveil-olive px-8 py-4 rounded-full font-bold hover:bg-eveil-sky transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contactez-nous pour en savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
