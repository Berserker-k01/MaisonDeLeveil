import { GraduationCap, Sun, Heart, Image } from 'lucide-react';

export default function Actions() {
  const projects = [
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: 'Programmes Éducatifs',
      description: 'Ateliers de développement personnel, méditation, yoga et pratiques contemplatives pour tous les âges.',
      color: 'bg-eveil-olive',
    },
    {
      icon: <Sun className="w-12 h-12 text-white" />,
      title: 'Retraites Spirituelles',
      description: 'Espaces de ressourcement en pleine nature pour se reconnecter à soi-même et trouver la paix intérieure.',
      color: 'bg-eveil-gold',
    },
    {
      icon: <Heart className="w-12 h-12 text-white" />,
      title: 'Aide Communautaire',
      description: 'Soutien aux personnes en difficulté à travers l\'écoute, l\'accompagnement et des programmes d\'entraide.',
      color: 'bg-eveil-sage',
    },
  ];

  const gallery = [
    { emoji: '🧘', alt: 'Méditation' },
    { emoji: '🌿', alt: 'Nature' },
    { emoji: '📚', alt: 'Éducation' },
    { emoji: '🕯️', alt: 'Spiritualité' },
    { emoji: '🤝', alt: 'Communauté' },
    { emoji: '🌅', alt: 'Éveil' },
  ];

  return (
    <section id="actions" className="py-20 bg-gradient-to-br from-eveil-sky via-white to-eveil-mist/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6">
            Nos Actions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos initiatives pour accompagner l'éveil personnel et contribuer au bien-être collectif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${project.color} p-8 flex justify-center items-center h-48`}>
                {project.icon}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-eveil-olive mb-4">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg fade-in">
          <div className="flex items-center justify-center mb-8">
            <Image className="text-eveil-olive mr-3" size={32} />
            <h3 className="text-3xl font-bold text-eveil-olive">Galerie</h3>
          </div>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Quelques moments inspirants capturés lors de nos événements et activités
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-eveil-mist to-eveil-sky rounded-xl flex items-center justify-center text-6xl hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-xl"
              >
                {item.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
