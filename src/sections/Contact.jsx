import { useState } from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { site, whatsappUrl } from '../config';
import { services } from '../data/services';
import Lines from '../components/Lines';

const Instagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
);

export default function Contact() {
  const [f, setF] = useState({ name: '', type: '', message: '' });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
  // No backend: this opens a prefilled WhatsApp chat. Nothing is "sent" until the visitor presses send in WhatsApp.
  const submit = (e) => {
    e.preventDefault();
    const parts = [site.whatsappMessage];
    if (f.name) parts.push(`Name: ${f.name}`);
    if (f.type) parts.push(`Interested in: ${f.type}`);
    if (f.message) parts.push(f.message);
    window.open(whatsappUrl(parts.join('\n\n')), '_blank', 'noopener,noreferrer');
  };
  return (
    <section id="contact" className="section light contact" aria-labelledby="contact-title">
      <div className="contact-grid">
        <div>
          <Lines as="h2" className="display" lines={['Have a story', 'in mind?']} />
          <p id="contact-title" style={{ fontSize: '1.4rem', maxWidth: '28ch' }}>Let’s turn your next idea into something worth remembering.</p>
          <div className="contact-links ui">
            <a className="btn btn-amber" href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp {site.phoneDisplay}</a>
            <a className="btn btn-ghost" href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} />Instagram</a>
            {site.email.verified && <a className="btn btn-ghost" href={`mailto:${site.email.address}`}><Mail size={18} />Email</a>}
          </div>
        </div>
        <form className="form" onSubmit={submit}>
          <label><span className="ui">Your name</span><input value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label><span className="ui">What do you need?</span>
            <select value={f.type} onChange={set('type')}><option value="">Choose a service</option>{services.map(([n]) => <option key={n}>{n}</option>)}</select></label>
          <label><span className="ui">Tell me about it</span><textarea value={f.message} onChange={set('message')} /></label>
          <button className="btn btn-amber ui" type="submit"><MessageCircle size={18} />Continue on WhatsApp</button>
          <small>This opens WhatsApp with your message ready to send. Nothing is sent until you press send there.</small>
        </form>
      </div>
    </section>
  );
}
