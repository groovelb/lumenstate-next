import LandingPage from '@/stories/page/LandingPage';

const ogTitle = 'Lumenstate — Light that defines the space, day to night.';
const ogDescription = 'Light quietly residing within the space, flowing from day to night, automatically managed yet precisely controlled on demand.';

export const metadata = {
  title: { absolute: 'Lumenstate' },
  description: ogDescription,
  alternates: { canonical: '/' },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: '/',
    // images는 루트 layout 기본값(/images/og/landing-bg.jpg)을 그대로 사용
  },
  twitter: {
    title: ogTitle,
    description: ogDescription,
  },
};

export default function HomePage() {
  return <LandingPage />;
}
