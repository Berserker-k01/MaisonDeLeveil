import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Participante aux retraites',
      content: 'Cette expérience a transformé ma vision de la vie. J\'ai trouvé la paix intérieure que je cherchais depuis des années.',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&auto=format&fit=crop',
      alt: 'Portrait de Sophie Martin',
    },
    {
      name: 'Jean Dupont',
      role: 'Bénévole',
      content: 'Contribuer à La Maison de l\'Éveil m\'a permis de donner un sens profond à mon quotidien tout en rencontrant des personnes inspirantes.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
      alt: 'Portrait de Jean Dupont',
    },
    {
      name: 'Marie Lambert',
      role: 'Membre',
      content: 'Un lieu d\'accueil chaleureux où chacun peut grandir à son rythme, entouré de bienveillance et de sagesse.',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop',
      alt: 'Portrait de Marie Lambert',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-eveil-mist/30 to-eveil-sky">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6">
            Témoignages
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez les expériences de ceux qui ont été touchés par notre mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="text-eveil-gold mb-4" size={40} />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-eveil-olive">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
