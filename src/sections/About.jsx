import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import SmartImage from '../components/SmartImage';
import Lines from '../components/Lines';
import Tape from '../components/Tape';

export default function About() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const d = reduce ? 0 : 1;
  const y1 = useTransform(scrollYProgress, [0, 1], [40 * d, -40 * d]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30 * d, 30 * d]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60 * d, -60 * d]);
  return (
    <section id="about" className="section light about" ref={ref} aria-labelledby="about-title">
      <div className="about-grid">
        <div>
          <Lines as="h2" className="display" lines={['Behind every', 'frame, there’s', 'a story.']} />
          <span id="about-title" hidden>About Swayam Deshmane</span>
          <p>I’m Swayam Deshmane, the creator behind BareFrame Studios. I capture people, places, performances, and ideas through photography and film, with a focus on atmosphere, emotion, and the details that make every story different.</p>
        </div>
        <div className="about-art">
          <motion.figure className="a1" style={{ y: y1, rotate: 2 }}>
            <SmartImage src="/images/behind-the-scenes/camera-portrait.jpg" alt="Swayam holding a camera against a painted blue wall" w={853} h={1280} />
            <Tape w={90} h={30} r={-12} style={{ top: -12, left: '30%' }} />
          </motion.figure>
          <motion.figure className="a2" style={{ y: y2, rotate: -3 }}>
            <SmartImage src="/images/behind-the-scenes/gimbal-filming-bw.jpg" alt="Black-and-white photo of Swayam filming with a gimbal" w={1600} h={1066} />
          </motion.figure>
          <motion.figure className="a3" style={{ y: y3, rotate: 4 }}>
            <SmartImage src="/images/behind-the-scenes/event-venue-camera.jpg" alt="Camera on a tripod in an event hall during stage setup" w={900} h={1600} />
            <Tape w={70} h={26} r={10} style={{ bottom: -10, right: -8 }} />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
