import { Heart, Sparkles, Users, BookOpen } from 'lucide-react';

export default function Mission() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-eveil-olive" />,
      title: 'Bienveillance',
      description: 'Cultiver la compassion et l\'écoute dans chaque interaction',
    },
    {
      icon: <Sparkles className="w-12 h-12 text-eveil-gold" />,
      title: 'Éveil',
      description: 'Accompagner chacun vers sa transformation personnelle',
    },
    {
      icon: <Users className="w-12 h-12 text-eveil-sage" />,
      title: 'Communauté',
      description: 'Créer des liens authentiques et solidaires',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-eveil-olive" />,
      title: 'Éducation',
      description: 'Partager les savoirs pour un monde meilleur',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            La Maison de l'Éveil est une ONG dédiée à l'accompagnement des individus vers une conscience élargie,
            un bien-être profond et une contribution positive à la société.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-eveil-sky to-eveil-mist/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-eveil-olive mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
