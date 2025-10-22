import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-eveil-mist/30 via-eveil-sky to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-eveil-olive mb-6">
            Contactez-Nous
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nous sommes à votre écoute. N'hésitez pas à nous écrire pour toute question ou demande d'information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-eveil-olive mb-6">Informations de Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-eveil-olive/10 p-3 rounded-full mr-4">
                    <MapPin className="text-eveil-olive" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">123 Rue de la Paix, 75001 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-eveil-gold/10 p-3 rounded-full mr-4">
                    <Mail className="text-eveil-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@maisondeleveil.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-eveil-sage/10 p-3 rounded-full mr-4">
                    <Phone className="text-eveil-sage" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-eveil-olive mb-6">Suivez-Nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-eveil-olive text-white p-4 rounded-full hover:bg-eveil-olive/90 transition-all duration-300 hover:scale-110">
                  <Facebook size={24} />
                </a>
                <a href="#" className="bg-eveil-gold text-white p-4 rounded-full hover:bg-eveil-gold/90 transition-all duration-300 hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="#" className="bg-eveil-sage text-white p-4 rounded-full hover:bg-eveil-sage/90 transition-all duration-300 hover:scale-110">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-eveil-olive mb-6">Envoyez-nous un Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-eveil-olive transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-eveil-olive transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-eveil-olive transition-all"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-eveil-olive transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-eveil-olive text-white px-8 py-4 rounded-lg font-semibold hover:bg-eveil-olive/90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Envoyer le message
                  <Send className="ml-2" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
