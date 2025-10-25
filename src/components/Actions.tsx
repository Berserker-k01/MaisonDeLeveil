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
    { src: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=600&auto=format&fit=crop', alt: 'Séance de méditation en groupe' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', alt: 'Nature et marche consciente' },
    { src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop', alt: 'Atelier et apprentissage' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600&auto=format&fit=crop', alt: 'Moment de contemplation' },
    { src: 'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=600&auto=format&fit=crop', alt: 'Communauté et entraide' },
    { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', alt: 'Aube et renouveau' },
  ];

  return (
    <section id="actions" className="py-20 bg-gradient-to-br from-eveil-sky via-white to-eveil-mist/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6">
            Nos Actions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-nunito">
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
                <h3 className="text-2xl font-bold text-eveil-olive mb-4 font-radibta">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed font-nunito">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg fade-in">
          <div className="flex items-center justify-center mb-8">
            <Image className="text-eveil-olive mr-3" size={32} />
            <h3 className="text-3xl font-bold text-eveil-olive font-radibta">Galerie</h3>
          </div>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto font-nunito">
            Quelques moments inspirants capturés lors de nos événements et activités
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {gallery.map((item, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
