import ThemeRegistry from './providers';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://lumenstate-next.vercel.app'),
  title: 'Lumenstate',
  description: 'Light defines the space.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    siteName: 'Lumenstate',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
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
