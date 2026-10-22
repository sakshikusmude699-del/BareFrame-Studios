import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site, whatsappUrl } from '../config';

const links = [['Work', '#work'], ['Films', '#films'], ['About', '#about'], ['Services', '#services'], ['Contact', '#contact']];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const btn = useRef(null);
  const menu = useRef(null);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    menu.current?.querySelector('a')?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); }
      if (e.key === 'Tab') {
        const f = [...menu.current.querySelectorAll('a')].concat(btn.current);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`nav ${solid || open ? 'solid' : ''}`}>
      <a href="#top" className="logo-chip" aria-label="BareFrame Studios, back to top" onClick={() => setOpen(false)}>
        <img src={site.logo} alt="BareFrame Studios logo" width="56" height="56" />
      </a>
      <button ref={btn} className="menu-btn" aria-expanded={open} aria-controls="site-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
        {open ? <X /> : <Menu />}
      </button>
      <nav id="site-menu" ref={menu} className={`nav-links ui ${open ? 'open' : ''}`} aria-label="Primary">
        {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        <a className="btn btn-amber" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Let’s Talk</a>
      </nav>
    </header>
  );
}
