import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ActionsPage from './pages/ActionsPage';
import JoinUsPage from './pages/JoinUsPage';
import ContactPage from './pages/ContactPage';
import MissionPage from './pages/MissionPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/temoignages" element={<TestimonialsPage />} />
          <Route path="/apropos" element={<AboutPage />} />
          <Route path="/actions" element={<ActionsPage />} />
          <Route path="/rejoindre" element={<JoinUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
