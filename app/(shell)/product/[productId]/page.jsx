import ProductDetailPage from '@/stories/page/ProductDetailPage';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((p) => ({ productId: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { productId } = await params;
  const product = products.find((p) => p.id === Number(productId));
  if (!product) {
    return { title: 'Product — Lumenstate' };
  }
  const title = `${product.title} — Lumenstate`;
  const description = product.description;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/product/${product.id}`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function ProductDetailRoute({ params }) {
  const { productId } = await params;
  const product = products.find((p) => p.id === Number(productId)) || products[0];

  const meta = {
    itemNumber: `LM-${String(product.id).padStart(3, '0')}`,
    leadTime: '4 Weeks',
    shipDate: 'Jan 15, 2025',
  };

  return (
    <ProductDetailPage
      product={ { ...product, price: 1290 } }
      meta={ meta }
    />
  );
}
