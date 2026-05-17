/**
 * scripts/build-og.mjs
 *
 * Generates compressed OG variants (1200×630, JPEG, target ≤500KB) from
 * source images under public/. Wired into package.json as `prebuild` so
 * `next build` always regenerates anything stale.
 */

import { statSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { products } from '../src/data/products.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const JOBS = [
  { src: 'images/og/landing-bg.jpg', out: 'og/landing.jpg' },
];

for (const p of products) {
  const source = p.images?.[0];
  if (!source) continue;
  JOBS.push({
    src: source.replace(/^\//, ''),
    out: `og/product/${p.id}.jpg`,
  });
}

const SIZE = { width: 1200, height: 630 };
const QUALITY = 82;
const MAX_BYTES = 500 * 1024;

function isStale(srcPath, outPath) {
  if (!existsSync(outPath)) return true;
  try {
    return statSync(srcPath).mtimeMs > statSync(outPath).mtimeMs;
  } catch {
    return true;
  }
}

async function processOne({ src, out }) {
  const srcPath = path.join(PUBLIC_DIR, src);
  const outPath = path.join(PUBLIC_DIR, out);

  if (!existsSync(srcPath)) {
    console.warn(`  ⚠ skip — source missing: ${src}`);
    return { status: 'missing' };
  }

  if (!isStale(srcPath, outPath)) {
    return { status: 'cached' };
  }

  mkdirSync(path.dirname(outPath), { recursive: true });

  await sharp(srcPath)
    .resize(SIZE.width, SIZE.height, { fit: 'cover', position: 'center' })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(outPath);

  const bytes = statSync(outPath).size;
  const oversized = bytes > MAX_BYTES;
  const kb = (bytes / 1024).toFixed(0);
  console.log(`  ${oversized ? '⚠' : '✓'} ${out} — ${kb}KB${oversized ? ' (exceeds Kakao 500KB)' : ''}`);
  return { status: oversized ? 'oversized' : 'ok', bytes };
}

async function main() {
  console.log(`[build-og] ${JOBS.length} job(s)`);
  const results = await Promise.all(JOBS.map(processOne));
  const counts = results.reduce((acc, r) => ({ ...acc, [r.status]: (acc[r.status] || 0) + 1 }), {});
  console.log(
    `[build-og] done — ${counts.ok || 0} built, ${counts.cached || 0} cached, ` +
    `${counts.oversized || 0} oversized, ${counts.missing || 0} missing`,
  );
  if (counts.oversized) {
    console.warn('[build-og] for oversized files, lower QUALITY or crop more tightly');
  }
}

main().catch((err) => {
  console.error('[build-og] failed:', err);
  process.exit(1);
});
