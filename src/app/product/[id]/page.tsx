"use client";
"use client";
import { products } from '@/data/products';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  // @ts-ignore
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  if (!product) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative aspect-[4/3] w-full max-w-[400px] mx-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="text-pink-600 font-bold text-xl mb-2">₹{product.price}</div>
          <p className="mb-4 text-gray-700">{product.description}</p>
          <button
            className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <div className="mt-4">
            <Link href={`/category/${product.category}`} className="text-blue-600 hover:underline">Back to Category</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
