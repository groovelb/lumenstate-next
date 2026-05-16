// Product images served from /public/images/product/<n>.png
const p = (n) => `/images/product/${n}.png`;

export const productAssets = Object.fromEntries(
  Array.from({ length: 20 }, (_, i) => i + 1).map((id) => [
    id,
    { images: [p(id), p(`${id}-1`)] },
  ])
);
