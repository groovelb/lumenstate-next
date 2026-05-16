import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import path from 'path';
import { content } from '@/data/content';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lumenstate — Light that defines the space.';

function loadPublic(relPath) {
  return readFileSync(path.join(process.cwd(), 'public', relPath));
}

export default async function Image() {
  const fontRegular = loadPublic('fonts/Pretendard-Regular.otf');
  const fontMedium = loadPublic('fonts/Pretendard-Medium.otf');
  const imageBuf = loadPublic('images/og/landing-bg.jpg');
  const imageDataUrl = `data:image/jpeg;base64,${imageBuf.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily: 'Pretendard',
        }}
      >
        <img
          src={imageDataUrl}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.78) 100%)',
            padding: 72,
            color: '#fff',
          }}
        >
          <div
            style={{
              fontSize: 104,
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              marginBottom: 22,
              display: 'flex',
            }}
          >
            {content.brand.name}
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              color: 'rgba(255,255,255,0.9)',
              display: 'flex',
              maxWidth: 940,
            }}
          >
            Light that defines the space — quietly residing, flowing day to night.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Pretendard', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Pretendard', data: fontMedium, weight: 500, style: 'normal' },
      ],
    },
  );
}
