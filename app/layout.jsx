import ThemeRegistry from './providers';
import './globals.css';

const SITE_URL = 'https://lumenstate-next.vercel.app';
const BRAND = 'Lumenstate';
const TAGLINE = 'Light defines the space.';
const OG_IMAGE = '/og/landing.jpg';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND} — ${TAGLINE}`,
    template: `%s | ${BRAND}`,
  },
  description: TAGLINE,
  applicationName: BRAND,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: BRAND,
    locale: 'ko_KR',
    url: SITE_URL,
    title: `${BRAND} — ${TAGLINE}`,
    description: TAGLINE,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: BRAND }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND} — ${TAGLINE}`,
    description: TAGLINE,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
