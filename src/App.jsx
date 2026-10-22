import { MotionConfig } from 'framer-motion';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Gallery from './sections/Gallery';
import Statement from './sections/Statement';
import Films from './sections/Films';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <Statement />
        <Films />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
