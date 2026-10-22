import { services } from '../data/services';
import Lines from '../components/Lines';
import Tape from '../components/Tape';

export default function Services() {
  return (
    <section id="services" className="section light-2" aria-labelledby="svc-title">
      <div className="services-grid">
        <div className="services-aside">
          <Lines as="h2" className="display" lines={['What I', 'make.']} />
          <p id="svc-title" className="muted" style={{ maxWidth: '30ch' }}>From a single portrait to a full festival, here is what BareFrame Studios takes on.</p>
          <div style={{ position: 'relative', height: 40, marginTop: '1.5rem' }}><Tape w={130} h={34} r={-3} style={{ left: 0 }} /></div>
        </div>
        <ul>
          {services.map(([name, line]) => (
            <li className="svc" key={name}><h3>{name}</h3><p>{line}</p></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
