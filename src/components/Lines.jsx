import { motion } from 'framer-motion';

// Masked line-by-line headline reveal. Plays once when scrolled into view.
export default function Lines({ lines, as: Tag = 'span', delay = 0, className }) {
  return (
    <Tag className={className}>
      {lines.map((l, i) => (
        <span className="lines" key={l}>
          <motion.span initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: delay + i * 0.12, ease: [0.22, 0.8, 0.24, 1] }}>{l}</motion.span>
        </span>
      ))}
    </Tag>
  );
}
