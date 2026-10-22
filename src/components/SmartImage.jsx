import { useState } from 'react';

// Image with a deliberate placeholder if the file is missing (no broken-image icon).
export default function SmartImage({ src, alt, w, h, eager, className, style }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return <div className="placeholder" role="img" aria-label={alt || 'Image placeholder'}>Add image at<br />{src || 'public/images/…'}</div>;
  }
  return (
    <img src={src} alt={alt || ''} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async"
      className={className} style={style} onError={() => setFailed(true)} />
  );
}
