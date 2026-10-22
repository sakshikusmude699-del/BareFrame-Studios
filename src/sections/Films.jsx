import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { films } from '../data/films';
import { site } from '../config';
import { useDialog } from '../hooks/useDialog';
import SmartImage from '../components/SmartImage';
import Lines from '../components/Lines';

function Modal({ film, onClose }) {
  const ref = useRef(null);
  useDialog(ref, onClose);
  return (
    <motion.div ref={ref} className="overlay" role="dialog" aria-modal="true" aria-label={film.title} tabIndex={-1}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="icon-btn close" onClick={onClose} aria-label="Close video"><X /></button>
      <video className="modal-video" src={film.src} poster={film.poster} controls autoPlay playsInline preload="metadata" />
    </motion.div>
  );
}

function Card({ film, feature, onPlay }) {
  const inner = (
    <>
      <SmartImage src={film.poster} alt={`Poster for ${film.title}`} />
      <span className="play" aria-hidden="true"><Play fill="currentColor" /></span>
      {feature && <span className="film-meta"><span className="display" style={{ fontSize: 'clamp(2rem,4vw,3.4rem)', display: 'block' }}>{film.title}</span>{film.description && <span>{film.description}</span>}</span>}
    </>
  );
  if (film.src) return <button className="film-feature" onClick={() => onPlay(film)} aria-label={`Play ${film.title}`}>{inner}</button>;
  return <a className="film-feature" href={film.href} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${film.title} (opens in a new tab)`}>{inner}</a>;
}

export default function Films() {
  const [playing, setPlaying] = useState(null);
  const [first, ...rest] = films;
  return (
    <section id="films" className="section dark grain" aria-labelledby="films-title">
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="sec-head">
          <Lines as="h2" className="display" lines={['Films & reels']} />
          <p className="muted" id="films-title">Motion work, shot and cut by Swayam.</p>
        </div>
        {first ? (
          <>
            <Card film={first} feature onPlay={setPlaying} />
            {rest.length > 0 && <div className="film-row">{rest.map((f) => <Card key={f.id} film={f} onPlay={setPlaying} />)}</div>}
          </>
        ) : (
          <div className="films-empty">
            <div>
              <h3 className="display">Films are being cut.</h3>
              <p className="muted" style={{ margin: '1rem 0 1.6rem', maxWidth: '38ch' }}>New films and reels will play here. Until then, recent reels live on Instagram.</p>
              <a className="btn btn-amber ui" href={site.instagram} target="_blank" rel="noopener noreferrer">Watch on Instagram</a>
            </div>
            <div className="ratio-box" role="img" aria-label="Empty video frame"><span>Owner: add MP4s to public/videos/films/<br />and list them in src/data/films.js</span></div>
          </div>
        )}
      </div>
      <AnimatePresence>{playing && <Modal film={playing} onClose={() => setPlaying(null)} />}</AnimatePresence>
    </section>
  );
}
