import { UserPlus, Users, HandHeart, Play } from 'lucide-react';

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

        {/* Image et CTA Témoignage */}
        <div className="mb-16 fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] group">
              <img 
                src="/src/images/1.jpg" 
                alt="Notre communauté en action" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* CTA Témoignage */}
            <div className="bg-gradient-to-br from-eveil-olive/10 to-eveil-sage/10 rounded-2xl p-10 shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-eveil-olive mb-6 font-radibta">
                Partagez Votre Expérience
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-nunito">
                Votre témoignage inspire d'autres personnes à rejoindre notre communauté. 
                Racontez-nous comment La Maison de l'Éveil a transformé votre vie.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-eveil-olive text-2xl mr-3">✓</span>
                  <span className="text-gray-700 font-nunito">Partagez votre parcours de transformation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-eveil-olive text-2xl mr-3">✓</span>
                  <span className="text-gray-700 font-nunito">Inspirez d'autres personnes en quête d'éveil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-eveil-olive text-2xl mr-3">✓</span>
                  <span className="text-gray-700 font-nunito">Contribuez à faire grandir notre communauté</span>
                </li>
              </ul>
              <button className="w-full bg-eveil-olive text-white px-8 py-4 rounded-full font-bold font-radibta hover:bg-eveil-olive/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Témoigner Maintenant
              </button>
            </div>
          </div>
        </div>

        {/* Section Témoignage Vidéo */}
        <div className="mb-16 fade-in">
          <div className="bg-gradient-to-br from-eveil-sky to-eveil-mist/30 rounded-2xl p-10 shadow-lg">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-eveil-olive rounded-full flex items-center justify-center shadow-lg">
                  <Play className="text-white" size={40} />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-eveil-olive mb-4 font-radibta">
                Écoutez un Extrait de Témoignage
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto font-nunito">
                Découvrez les témoignages inspirants de notre communauté et laissez-vous toucher par la puissance de l'Esprit Saint
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://www.tiktok.com/@lamaisondeleveil/video/VOTRE_ID_VIDEO_TIKTOK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-bold font-radibta hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                Écouter sur TikTok
              </a>
              
              <a 
                href="https://www.youtube.com/watch?v=VOTRE_ID_VIDEO_YOUTUBE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full font-bold font-radibta hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Écouter sur YouTube
              </a>
            </div>
          </div>
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
              <p className="text-gray-700 leading-relaxed mb-6 text-center font-nunito">{option.description}</p>
              <div className="text-center">
                <button className={`${option.color} text-white px-6 py-3 rounded-full font-semibold font-radibta hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}>
                  {option.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-eveil-olive to-eveil-sage rounded-2xl p-12 text-center text-white shadow-2xl fade-in">
          <h3 className="text-3xl font-bold mb-4 font-radibta">Chaque geste compte</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95 font-nunito">
            Que vous donniez de votre temps, de votre énergie ou de votre soutien financier,
            vous contribuez à transformer des vies et à créer un impact durable.
          </p>
          <button className="bg-white text-eveil-olive px-8 py-4 rounded-full font-bold font-radibta hover:bg-eveil-sky transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contactez-nous pour en savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
