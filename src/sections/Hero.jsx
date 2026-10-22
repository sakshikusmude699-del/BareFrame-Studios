import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../config';
import Lines from '../components/Lines';

export default function Hero() {
  const reduce = useReducedMotion();
  const [videoOk, setVideoOk] = useState(true);
  const useVideo = site.heroVideo && videoOk && !reduce;
  return (
    <section id="top" className="hero dark grain" aria-label="BareFrame Studios introduction">
      <div className="hero-bg" aria-hidden="true">
        {useVideo ? (
          <video src={site.heroVideo} poster={site.heroPoster} autoPlay muted loop playsInline preload="metadata" onError={() => setVideoOk(false)} />
        ) : (
          <img src={site.heroPoster} alt="" fetchPriority="high" />
        )}
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div className="hero-brand ui" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.75 }}>
            <span className="hero-brand-name">BareFrame Studios</span>
            <span className="hero-brand-by">by Swayam</span>
          </motion.div>
          <h1 className="display" aria-label="Stories Beyond the Frame.">
            <span aria-hidden="true">
              {['Stories Beyond', 'the Frame.'].map((l, i) => (
                <span className="lines" key={l}>
                  <motion.span style={{ display: 'block' }} initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3 + i * 0.14, ease: [0.22, 0.8, 0.24, 1] }}>{l}</motion.span>
                </span>
              ))}
            </span>
          </h1>
          <motion.span className="hero-bar" aria-hidden="true" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 0.8, 0.24, 1] }} />
          <motion.p className="lead" style={{ marginTop: '1.6rem' }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
            Films, photography, and visual stories made to stay with you.
          </motion.p>
          <motion.div className="hero-ctas ui" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15, duration: 0.8 }}>
            <a className="btn btn-amber" href="#work">Explore the work</a>
            <a className="btn btn-ghost" href="#contact">Let’s create together</a>
          </motion.div>
        </div>
      </div>
      <div className="scroll-cue ui" aria-hidden="true"><i />Scroll</div>
    </section>
  );
}
