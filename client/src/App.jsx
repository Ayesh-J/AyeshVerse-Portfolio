import react from 'react'
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements'
import Contact from './components/Contact';
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />

      {/* ...next sections go here... */}
    </div>
  );
}
