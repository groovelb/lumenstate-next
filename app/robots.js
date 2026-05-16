export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Facebot', allow: '/' },
      { userAgent: 'Twitterbot', allow: '/' },
      { userAgent: 'kakaotalk-scrap', allow: '/' },
      { userAgent: 'LinkedInBot', allow: '/' },
      { userAgent: 'Slackbot', allow: '/' },
      { userAgent: 'Slackbot-LinkExpanding', allow: '/' },
    ],
    host: 'https://lumenstate-next.vercel.app',
  };
}
