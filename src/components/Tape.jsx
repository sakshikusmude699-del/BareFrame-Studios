// Amber tape motif, echoing the logo. Purely decorative.
export default function Tape({ w = 110, h = 34, r = -4, style }) {
  return <span aria-hidden="true" className="tape" style={{ '--w': `${w}px`, '--h': `${h}px`, '--r': `${r}deg`, ...style }} />;
}
