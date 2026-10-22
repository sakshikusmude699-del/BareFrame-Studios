import { site, whatsappUrl } from '../config';

export default function Footer() {
  return (
    <footer className="footer grain">
      <div className="footer-grid" style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-brand">
          <span className="logo-chip"><img src={site.logo} alt="BareFrame Studios logo" width="92" height="92" loading="lazy" /></span>
          <div><h2 className="display">{site.name}</h2><p className="muted">{site.tagline}</p></div>
        </div>
        <nav aria-label="Footer sections"><ul className="ui">
          {[['Work', '#work'], ['Films', '#films'], ['About', '#about'], ['Services', '#services'], ['Contact', '#contact']].map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}
        </ul></nav>
        <ul className="ui">
          <li><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </div>
      <p className="legal" style={{ position: 'relative', zIndex: 2 }}>© {new Date().getFullYear()} {site.name}. Photography and film by {site.creator}.</p>
    </footer>
  );
}
