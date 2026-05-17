import LandingPage from '@/stories/page/LandingPage';

const ogTitle = 'Lumenstate — Light that defines the space, day to night.';
const ogDescription = 'Light quietly residing within the space, flowing from day to night, automatically managed yet precisely controlled on demand.';
const OG_IMAGE = '/og/landing.jpg';

export const metadata = {
  title: { absolute: 'Lumenstate' },
  description: ogDescription,
  alternates: { canonical: '/' },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: '/',
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Lumenstate' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: ogDescription,
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  return <LandingPage />;
}
