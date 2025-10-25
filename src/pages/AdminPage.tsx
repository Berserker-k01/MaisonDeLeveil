import { useState } from 'react';
import { Users, BookOpen, MessageSquare, Settings, Image, Video, FileText, ChevronRight } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Témoignages', value: '36', icon: MessageSquare, color: 'bg-eveil-olive' },
    { label: 'Membres Actifs', value: '245', icon: Users, color: 'bg-eveil-sage' },
    { label: 'Projets/Actions', value: '12', icon: BookOpen, color: 'bg-eveil-gold' },
    { label: 'Médias Vidéos', value: '24', icon: Video, color: 'bg-eveil-mist' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Admin */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-eveil-olive font-radibta uppercase">
              Administration - La Maison de l'Éveil
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-nunito">Admin</span>
              <button className="px-4 py-2 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90 transition-all">
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-nunito transition-all ${
                    activeTab === 'dashboard'
                      ? 'bg-eveil-olive text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings size={20} />
                  <span>Tableau de Bord</span>
                </button>
                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-nunito transition-all ${
                    activeTab === 'testimonials'
                      ? 'bg-eveil-olive text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare size={20} />
                  <span>Témoignages</span>
                </button>
                <button
                  onClick={() => setActiveTab('members')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-nunito transition-all ${
                    activeTab === 'members'
                      ? 'bg-eveil-olive text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Users size={20} />
                  <span>Membres</span>
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-nunito transition-all ${
                    activeTab === 'projects'
                      ? 'bg-eveil-olive text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BookOpen size={20} />
                  <span>Actions/Projets</span>
                </button>
                <button
                  onClick={() => setActiveTab('media')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-nunito transition-all ${
                    activeTab === 'media'
                      ? 'bg-eveil-olive text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Image size={20} />
                  <span>Médias</span>
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-nunito transition-all ${
                    activeTab === 'content'
                      ? 'bg-eveil-olive text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText size={20} />
                  <span>Contenus</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {/* Dashboard View */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 font-radibta">Tableau de Bord</h2>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                          <stat.icon className="text-white" size={24} />
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-gray-800 font-radibta">{stat.value}</p>
                      <p className="text-sm text-gray-600 font-nunito">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-radibta">Actions Rapides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-eveil-olive hover:bg-eveil-olive/5 transition-all">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="text-eveil-olive" size={20} />
                        <span className="font-nunito">Ajouter un témoignage</span>
                      </div>
                      <ChevronRight className="text-gray-400" size={20} />
                    </button>
                    <button className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-eveil-olive hover:bg-eveil-olive/5 transition-all">
                      <div className="flex items-center gap-3">
                        <Users className="text-eveil-olive" size={20} />
                        <span className="font-nunito">Gérer les membres</span>
                      </div>
                      <ChevronRight className="text-gray-400" size={20} />
                    </button>
                    <button className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-eveil-olive hover:bg-eveil-olive/5 transition-all">
                      <div className="flex items-center gap-3">
                        <Video className="text-eveil-olive" size={20} />
                        <span className="font-nunito">Gérer les vidéos</span>
                      </div>
                      <ChevronRight className="text-gray-400" size={20} />
                    </button>
                    <button className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-eveil-olive hover:bg-eveil-olive/5 transition-all">
                      <div className="flex items-center gap-3">
                        <FileText className="text-eveil-olive" size={20} />
                        <span className="font-nunito">Modifier les contenus</span>
                      </div>
                      <ChevronRight className="text-gray-400" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonials Management */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800 font-radibta">Gestion des Témoignages</h2>
                  <button className="px-6 py-3 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90 transition-all">
                    + Ajouter un témoignage
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 font-radibta">Auteur</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 font-radibta">Titre</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 font-radibta">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 font-radibta">Statut</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 font-radibta">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-nunito">Marie Dupont</td>
                        <td className="px-6 py-4 font-nunito">Transformation spirituelle</td>
                        <td className="px-6 py-4 font-nunito">24 Oct 2025</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-nunito">
                            Publié
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm text-eveil-olive hover:bg-eveil-olive/10 rounded font-nunito">
                              Modifier
                            </button>
                            <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded font-nunito">
                              Supprimer
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-nunito">Jean Martin</td>
                        <td className="px-6 py-4 font-nunito">Guérison miraculeuse</td>
                        <td className="px-6 py-4 font-nunito">23 Oct 2025</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-nunito">
                            En attente
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm text-eveil-olive hover:bg-eveil-olive/10 rounded font-nunito">
                              Modifier
                            </button>
                            <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded font-nunito">
                              Supprimer
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Members Management */}
            {activeTab === 'members' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800 font-radibta">Gestion des Membres</h2>
                  <button className="px-6 py-3 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90 transition-all">
                    + Ajouter un membre
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-eveil-olive rounded-full flex items-center justify-center">
                        <Users className="text-white" size={24} />
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-nunito">
                        Actif
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1 font-radibta">Sophie Berger</h4>
                    <p className="text-sm text-gray-600 mb-4 font-nunito">Bénévole depuis 2024</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 text-sm text-eveil-olive border border-eveil-olive rounded-lg hover:bg-eveil-olive/10 font-nunito">
                        Voir profil
                      </button>
                      <button className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-nunito">
                        ...
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-eveil-sage rounded-full flex items-center justify-center">
                        <Users className="text-white" size={24} />
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-nunito">
                        Actif
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1 font-radibta">Thomas Laurent</h4>
                    <p className="text-sm text-gray-600 mb-4 font-nunito">Membre depuis 2023</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 text-sm text-eveil-olive border border-eveil-olive rounded-lg hover:bg-eveil-olive/10 font-nunito">
                        Voir profil
                      </button>
                      <button className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 font-nunito">
                        ...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects Management */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800 font-radibta">Gestion des Actions/Projets</h2>
                  <button className="px-6 py-3 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90 transition-all">
                    + Ajouter un projet
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-eveil-olive transition-all">
                      <div>
                        <h4 className="font-bold text-gray-800 font-radibta">Retraites Spirituelles</h4>
                        <p className="text-sm text-gray-600 font-nunito">Programme de transformation personnelle</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm text-eveil-olive border border-eveil-olive rounded-lg hover:bg-eveil-olive/10 font-nunito">
                          Modifier
                        </button>
                        <button className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 font-nunito">
                          Supprimer
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-eveil-olive transition-all">
                      <div>
                        <h4 className="font-bold text-gray-800 font-radibta">Accompagnement Individuel</h4>
                        <p className="text-sm text-gray-600 font-nunito">Séances personnalisées de développement</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm text-eveil-olive border border-eveil-olive rounded-lg hover:bg-eveil-olive/10 font-nunito">
                          Modifier
                        </button>
                        <button className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 font-nunito">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Media Management */}
            {activeTab === 'media' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800 font-radibta">Gestion des Médias</h2>
                  <button className="px-6 py-3 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90 transition-all">
                    + Ajouter un média
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 font-radibta">Liens Vidéo (TikTok / YouTube)</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <label className="w-32 font-nunito text-gray-700">TikTok :</label>
                        <input
                          type="text"
                          placeholder="https://www.tiktok.com/@lamaisondeleveil/video/..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-eveil-olive font-nunito"
                        />
                        <button className="px-6 py-2 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90">
                          Enregistrer
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="w-32 font-nunito text-gray-700">YouTube :</label>
                        <input
                          type="text"
                          placeholder="https://www.youtube.com/watch?v=..."
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-eveil-olive font-nunito"
                        />
                        <button className="px-6 py-2 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90">
                          Enregistrer
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4 font-radibta">Images et Galerie</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-eveil-olive cursor-pointer transition-all">
                        <div className="text-center">
                          <Image className="mx-auto text-gray-400 mb-2" size={32} />
                          <p className="text-sm text-gray-600 font-nunito">Ajouter une image</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content Management */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 font-radibta">Gestion des Contenus</h2>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 font-radibta">Page d'Accueil</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 font-radibta">Titre Principal</label>
                      <input
                        type="text"
                        defaultValue="LA MAISON DE L'ÉVEIL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-eveil-olive font-nunito"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 font-radibta">Description</label>
                      <textarea
                        rows={3}
                        defaultValue="Un espace de transformation personnelle et de bienveillance pour éveiller votre plein potentiel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-eveil-olive font-nunito"
                      />
                    </div>
                    <button className="px-6 py-3 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90">
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 font-radibta">Page À Propos</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 font-radibta">Verset Biblique</label>
                      <textarea
                        rows={3}
                        defaultValue="« Nous donc aussi, puisque nous sommes environnés d'une si grande nuée de témoins... »"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-eveil-olive font-nunito"
                      />
                    </div>
                    <button className="px-6 py-3 bg-eveil-olive text-white rounded-lg font-nunito hover:bg-eveil-olive/90">
                      Enregistrer les modifications
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
