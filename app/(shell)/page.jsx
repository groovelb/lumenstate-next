import LandingPage from '@/stories/page/LandingPage';

const ogTitle = 'Lumenstate — Light that defines the space, day to night.';
const ogDescription = 'Light quietly residing within the space, flowing from day to night, automatically managed yet precisely controlled on demand.';

export const metadata = {
  title: 'Lumenstate',
  description: ogDescription,
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: '/',
  },
  twitter: {
    title: ogTitle,
    description: ogDescription,
  },
};

export default function HomePage() {
  return <LandingPage />;
}
