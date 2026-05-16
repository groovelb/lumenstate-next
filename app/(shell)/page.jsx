import LandingPage from '@/stories/page/LandingPage';
import { content } from '@/data/content';

const { brand, hero } = content;
const ogTitle = `${brand.name} — ${brand.tagline}`;
const ogDescription = brand.tagline;
const ogImage = hero.moodboard.hero;

export const metadata = {
  title: brand.name,
  description: ogDescription,
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: '/',
    images: [
      {
        url: ogImage,
        width: 2528,
        height: 1696,
        alt: 'Lumenstate brand mood',
      },
    ],
  },
  twitter: {
    title: ogTitle,
    description: ogDescription,
    images: [ogImage],
  },
};

export default function HomePage() {
  return <LandingPage />;
}
