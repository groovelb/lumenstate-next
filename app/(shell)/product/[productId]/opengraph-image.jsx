import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import path from 'path';
import { products } from '@/data/products';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Lumenstate product';

function loadPublic(relPath) {
  return readFileSync(path.join(process.cwd(), 'public', relPath));
}

export default async function Image({ params }) {
  const { productId } = await params;
  const product = products.find((p) => p.id === Number(productId));

  const fontRegular = loadPublic('fonts/Pretendard-Regular.otf');
  const fontMedium = loadPublic('fonts/Pretendard-Medium.otf');

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0a',
            color: '#fff',
            fontSize: 72,
            fontFamily: 'Pretendard',
            letterSpacing: 8,
          }}
        >
          LUMENSTATE
        </div>
      ),
      {
        ...size,
        fonts: [{ name: 'Pretendard', data: fontMedium, weight: 500, style: 'normal' }],
      },
    );
  }

  const imageBuf = loadPublic(product.images[0].replace(/^\//, ''));
  const imageDataUrl = `data:image/png;base64,${imageBuf.toString('base64')}`;

  const description = product.description.length > 130
    ? product.description.slice(0, 128).trim() + '…'
    : product.description;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a0a0a',
          color: '#fff',
          fontFamily: 'Pretendard',
        }}
      >
        <div
          style={{
            width: 540,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 40,
          }}
        >
          <img
            src={imageDataUrl}
            width={460}
            height={550}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div
          style={{
            flex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '70px 72px 70px 0',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 28,
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            {product.title}
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              color: 'rgba(255,255,255,0.72)',
              display: 'flex',
            }}
          >
            {description}
          </div>
          <div
            style={{
              marginTop: 'auto',
              fontSize: 18,
              letterSpacing: 6,
              color: 'rgba(255,255,255,0.55)',
              display: 'flex',
            }}
          >
            LUMENSTATE
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
