import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useDialog } from '../hooks/useDialog';
import { categories } from '../data/portfolio';
import SmartImage from './SmartImage';

const label = (id) => categories.find((c) => c.id === id)?.label ?? '';

export default function Lightbox({ list, startIndex, onClose }) {
  const [i, setI] = useState(startIndex);
  const ref = useRef(null);
  const openedId = list[startIndex].id;
  const go = (d) => setI((n) => (n + d + list.length) % list.length);
  useDialog(ref, onClose, { ArrowRight: () => go(1), ArrowLeft: () => go(-1) });
  const it = list[i];
  const ratio = it.w / it.h;

  return (
    <motion.div ref={ref} className="overlay" role="dialog" aria-modal="true" aria-label={`Photo viewer: ${it.title || label(it.category)}`} tabIndex={-1}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onPanEnd={(_, info) => { if (Math.abs(info.offset.x) > 80 && Math.abs(info.offset.y) < 80) go(info.offset.x < 0 ? 1 : -1); }}>
      <button className="icon-btn close" onClick={onClose} aria-label="Close viewer"><X /></button>
      {list.length > 1 && <>
        <button className="icon-btn prev" onClick={() => go(-1)} aria-label="Previous photo"><ChevronLeft /></button>
        <button className="icon-btn next" onClick={() => go(1)} aria-label="Next photo"><ChevronRight /></button>
      </>}
      <div className="lb-wrap" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <motion.figure key={it.id} className="lb-fig" layoutId={it.id === openedId ? `img-${it.id}` : undefined}
          style={{ aspectRatio: ratio, width: `min(92vw, calc(80vh * ${ratio}))` }}
          initial={it.id === openedId ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: [0.22, 0.8, 0.24, 1] }}>
          <SmartImage src={it.full || it.image} alt={it.alt} w={it.w} h={it.h} eager />
        </motion.figure>
      </div>
      <div className="lb-cap ui" aria-live="polite">
        <p>{it.title ? `${it.title} · ` : ''}{label(it.category)}{it.year ? ` · ${it.year}` : ''}</p>
        <span>{i + 1} / {list.length}</span>
      </div>
    </motion.div>
  );
}
