/*
  PORTFOLIO DATA: add a project by adding one object to `items`.
  Fields: id (unique), category, image (thumbnail/grid), full (optional, lightbox), gallery (optional extra images),
          video (optional), title, year, description, alt, w/h (pixel size of `full` or `image`; avoids layout shift).
  Only add title/year/description/client details that are real. Leave them out otherwise; the UI shows the category instead.
  Category ids: portraits | events | fashion | photography | films | bts
*/
export const categories = [
  { id: 'portraits', label: 'Portraits & Models' },
  { id: 'events', label: 'Concerts & Events' },
  { id: 'fashion', label: 'Fashion & Brands' },
  { id: 'photography', label: 'Photography' },
  { id: 'films', label: 'Films & Reels' },
  { id: 'bts', label: 'Behind the Scenes' },
];

const p = (folder, n, rest) => ({
  image: `/images/${folder}/img-${n}-thumb.webp`,
  full: `/images/${folder}/img-${n}.jpg`,
  w: 1600,
  h: 2400,
  ...rest,
});

export const items = [
  p('brands', '0815', { id: 'fashion-0815', category: 'fashion', alt: 'Model in a black-and-white harlequin gown and lace mask, with hanging mask sculptures behind her' }),
  p('portraits', '7815', { id: 'portrait-7815', category: 'portraits', alt: 'Close portrait of a model in a floral strapless dress with a sculptural translucent flower' }),
  p('brands', '7912', { id: 'fashion-7912', category: 'fashion', alt: 'Model in red and gold printed flared trousers, a cropped blouse with winged shoulders and a yellow net stole' }),
  p('portraits', '0816', { id: 'portrait-0816', category: 'portraits', alt: 'Black-and-white portrait of a model in a brocade blouse and a layered forehead jewel' }),
  p('brands', '0817', { id: 'fashion-0817', category: 'fashion', alt: 'Black-and-white frame of a model in a wide-sleeved striped jacket with arms stretched out' }),
  p('portraits', '7881', { id: 'portrait-7881', category: 'portraits', alt: 'Model in profile wearing a green brocade blouse and a gold headpiece' }),
  p('brands', '7806', { id: 'fashion-7806', category: 'fashion', alt: 'Model in profile in a floral corset top with red three-dimensional flowers and a pearl headpiece' }),
  p('portraits', '7880', { id: 'portrait-7880', category: 'portraits', alt: 'Black-and-white profile of a model in a brocade blouse with her eyes lowered' }),
  p('brands', '7846', { id: 'fashion-7846', category: 'fashion', alt: 'Black-and-white frame of a model in a laced vest and a tulle skirt with a long train' }),
  p('portraits', '7949', { id: 'portrait-7949', category: 'portraits', alt: 'Black-and-white portrait of a male model in a textured jacket and striped trousers holding a masquerade mask' }),
  p('brands', '7957', { id: 'fashion-7957', category: 'fashion', alt: 'Black-and-white full-length frame of a model in a harlequin checkerboard gown' }),
  {
    id: 'bts-gimbal', category: 'bts', title: 'On set with the gimbal',
    image: '/images/behind-the-scenes/gimbal-filming-bw.jpg', full: '/images/behind-the-scenes/gimbal-filming-bw.jpg',
    w: 1600, h: 1066, alt: 'Black-and-white photo of Swayam filming with a phone on a gimbal',
  },
  {
    id: 'bts-venue', category: 'bts', title: 'Camera on tripod, event venue',
    image: '/images/behind-the-scenes/event-venue-camera.jpg', full: '/images/behind-the-scenes/event-venue-camera.jpg',
    w: 900, h: 1600, alt: 'Camera on a tripod in a large event hall while the stage is being built',
  },
  {
    id: 'bts-camera', category: 'bts', title: 'Camera in hand',
    image: '/images/behind-the-scenes/camera-portrait.jpg', full: '/images/behind-the-scenes/camera-portrait.jpg',
    w: 853, h: 1280, alt: 'Swayam holding a camera against a painted blue wall',
  },
];

export const byId = (id) => items.find((i) => i.id === id);
