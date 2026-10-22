import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { byId } from '../data/portfolio';
import Lines from '../components/Lines';
import Tape from '../components/Tape';
import SmartImage from '../components/SmartImage';

// Signature 3D moment: three prints at different depths that respond gently to the pointer.
const layers = [
  { id: 'fashion-0815', style: { left: '2%', top: '2%', width: '46%' }, z: -90, r: -6 },
  { id: 'fashion-7912', style: { left: '30%', top: '14%', width: '42%' }, z: 0, r: 3 },
  { id: 'portrait-7881', style: { left: '56%', top: '34%', width: '38%' }, z: 90, r: -2 },
];

export default function Statement() {
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(4), { stiffness: 70, damping: 16 });
  const ry = useSpring(useMotionValue(-8), { stiffness: 70, damping: 16 });
  const move = (e) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 18);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
  };
  return (
    <section className="section statement dark grain" aria-label="Brand statement">
      <div className="statement-grid">
        <div>
          <Lines as="h2" className="display" lines={['Not just', 'captured.', 'Felt.']} />
          <span className="hero-bar bar" aria-hidden="true" />
        </div>
        <div className="stack" onPointerMove={move} onPointerLeave={() => { ry.set(-8); rx.set(4); }}>
          <motion.div className="stack-inner" style={{ rotateX: rx, rotateY: ry }}>
            {layers.map((l) => {
              const it = byId(l.id);
              if (!it) return null;
              return (
                <div key={l.id} className="sprint" style={{ ...l.style, transform: `translateZ(${l.z}px) rotate(${l.r}deg)` }}>
                  <SmartImage src={it.image} alt={it.alt} w={it.w} h={it.h} />
                </div>
              );
            })}
            <Tape w={100} h={32} r={-18} style={{ left: '20%', top: '-1%', transform: 'translateZ(120px) rotate(-18deg)' }} />
            <Tape w={90} h={30} r={14} style={{ right: '2%', bottom: '8%', transform: 'translateZ(140px) rotate(14deg)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
