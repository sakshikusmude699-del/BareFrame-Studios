// Single source of truth for brand details. Edit here only.
const whatsappNumber = '917756875954';

export const site = {
  name: 'BareFrame Studios',
  creator: 'Swayam Deshmane',
  tagline: 'Stories Beyond the Frame.',
  phoneDisplay: '+91 77568 75954',
  whatsappNumber,
  whatsappMessage:
    'Hi Swayam! I came across BareFrame Studios and would love to discuss a shoot or project.',
  instagram: 'https://www.instagram.com/bareframestudios_/',
  // UNVERIFIED: supplied as "gmial.com", which looks like a typo for "gmail.com".
  // No mailto link or visible email is published until the owner confirms the address.
  // After confirming: correct `address` and set `verified: true`.
  email: { address: 'swayamdeshamane02@gmial.com', verified: false },
  // Production domain is not known yet. Fill in when deployed (used only if set).
  siteUrl: null,
  // Hero video background.
  heroVideo: '/videos/films/download.mp4',
  heroPoster: '/images/behind-the-scenes/event-venue-camera.jpg',
  logo: '/images/brand/bareframe-logo.png',
};

export const whatsappUrl = (text = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
