import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { categories, items } from '../data/portfolio';
import SmartImage from '../components/SmartImage';
import Lightbox from '../components/Lightbox';
import Tape from '../components/Tape';
import Lines from '../components/Lines';

const SPEED = [34, -10, 52, 8, -28, 22];
const ROT = [-2.2, 1.6, -1, 1.2, -1.8, 2];
const ASPECT = ['4/5', '2/3', '1/1', '3/4', '2/3', '4/5'];

function Print({ item, i, onOpen }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const sp = reduce ? 0 : SPEED[i % 6];
  const y = useTransform(scrollYProgress, [0, 1], [sp, -sp]);
  const rx = useSpring(useMotionValue(0), { stiffness: 140, damping: 16 });
  const ry = useSpring(useMotionValue(0), { stiffness: 140, damping: 16 });
  const move = (e) => {
    if (e.pointerType !== 'mouse' || reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 14);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  const landscape = item.w > item.h;
  return (
    <motion.li ref={ref} className="print" style={{ y }}
      initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 0.8, 0.24, 1] }}>
      <motion.button className="print-frame" aria-label={`Open photo: ${item.alt || item.title || 'portfolio image'}`}
        style={{ rotate: ROT[i % 6], rotateX: rx, rotateY: ry, transformPerspective: 900 }}
        whileHover={reduce ? undefined : { scale: 1.035 }} onPointerMove={move} onPointerLeave={reset} onClick={() => onOpen(item.id)}>
        <motion.div className="print-img" layoutId={`img-${item.id}`} style={{ aspectRatio: landscape ? '3/2' : ASPECT[i % 6] }}>
          <SmartImage src={item.image} alt={item.alt} w={item.w} h={item.h} style={{ objectPosition: '50% 30%' }} />
        </motion.div>
        <span className="print-cap">{item.title || ''}</span>
      </motion.button>
      {i % 3 === 0 && <Tape w={84} h={28} r={i % 2 ? 8 : -9} style={{ top: -12, left: '38%' }} />}
    </motion.li>
  );
}

export default function Gallery() {
  const [cat, setCat] = useState('all');
  const [open, setOpen] = useState(null);
  const available = categories.filter((c) => items.some((it) => it.category === c.id));
  const list = cat === 'all' ? items : items.filter((it) => it.category === cat);
  const idx = open ? list.findIndex((it) => it.id === open) : -1;

  return (
    <section id="work" className="section light" aria-labelledby="work-title">
      <div className="wrap">
        <div className="sec-head">
          <Lines as="h2" className="display" lines={['Selected work']} />
          <p className="muted">Click any frame to view it full size. Use the arrow keys or swipe to move between photos.</p>
        </div>
        <span id="work-title" hidden>Selected work</span>
        {items.length === 0 ? (
          <div className="empty"><p>No projects yet. Add photos to <code>src/data/portfolio.js</code> and <code>public/images/</code>.</p></div>
        ) : (
          <>
            <div className="filters ui" role="group" aria-label="Filter work by category">
              {[{ id: 'all', label: 'All Work' }, ...available].map((c) => (
                <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.label}</button>
              ))}
            </div>
            <ul className="prints">
              <AnimatePresence mode="popLayout">
                {list.map((it, i) => <Print key={`${cat}-${it.id}`} item={it} i={i} onOpen={setOpen} />)}
              </AnimatePresence>
            </ul>
          </>
        )}
      </div>
      <AnimatePresence>
        {idx >= 0 && <Lightbox list={list} startIndex={idx} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}
