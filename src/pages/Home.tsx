import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const actionsGallery = [
    { src: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=600&auto=format&fit=crop', alt: 'Séance de méditation' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop', alt: 'Marche consciente' },
    { src: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop', alt: 'Atelier d\'apprentissage' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600&auto=format&fit=crop', alt: 'Contemplation' },
    { src: 'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=600&auto=format&fit=crop', alt: 'Communauté' },
    { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', alt: 'Aube' },
  ];

  const actionsScrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 'left' | 'right') => {
    const el = actionsScrollerRef.current;
    if (!el) return;
    const amount = Math.min(600, el.clientWidth * 0.9);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div>
      <Hero />

      {/* Aperçu Actions - carrousel avec boutons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-eveil-olive">Nos Actions</h2>
            <div className="flex items-center gap-2">
              <button
                aria-label="Défiler vers la gauche"
                onClick={() => scrollBy('left')}
                className="p-2 rounded-full border border-eveil-olive/30 text-eveil-olive hover:bg-eveil-olive hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Défiler vers la droite"
                onClick={() => scrollBy('right')}
                className="p-2 rounded-full border border-eveil-olive/30 text-eveil-olive hover:bg-eveil-olive hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
              <Link to="/actions" className="ml-2 text-eveil-olive font-semibold hover:underline underline-offset-4">
                Voir tout
              </Link>
            </div>
          </div>
          <div
            ref={actionsScrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollbarWidth: 'none' }}
          >
            {actionsGallery.map((item, idx) => (
              <Link to="/actions" key={idx} className="min-w-[260px] md:min-w-[320px] snap-start">
                <div className="h-48 md:h-56 w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau CTA */}
      <section className="py-16 bg-gradient-to-r from-eveil-olive to-eveil-sage text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez une communauté bienveillante</h2>
          <p className="opacity-95 max-w-2xl mx-auto mb-8">Participez à nos ateliers, retraites et actions solidaires pour cultiver l'éveil et l'entraide.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/rejoindre" className="bg-white text-eveil-olive px-6 py-3 rounded-full font-semibold hover:bg-eveil-sky transition">Nous rejoindre</Link>
            <Link to="/actions" className="border border-white/70 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">Découvrir nos actions</Link>
          </div>
        </div>
      </section>

      {/* Statistiques clés */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-eveil-sky">
              <p className="text-4xl font-bold text-eveil-olive">50+</p>
              <p className="text-gray-700">Ateliers/an</p>
            </div>
            <div className="p-6 rounded-2xl bg-eveil-sky">
              <p className="text-4xl font-bold text-eveil-olive">1k+</p>
              <p className="text-gray-700">Participants</p>
            </div>
            <div className="p-6 rounded-2xl bg-eveil-sky">
              <p className="text-4xl font-bold text-eveil-olive">20+</p>
              <p className="text-gray-700">Bénévoles actifs</p>
            </div>
            <div className="p-6 rounded-2xl bg-eveil-sky">
              <p className="text-4xl font-bold text-eveil-olive">2018</p>
              <p className="text-gray-700">Depuis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
