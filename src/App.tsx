import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Actions from './components/Actions';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="contenu">
        <Hero />
        <Mission />
        <Testimonials />
        <About />
        <Actions />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
