import { products } from '@/data/products';
import { categories } from '@/data/categories';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default function CategoryDetailPage({ params }: Props) {
  const category = categories.find((c) => c.id === params.id);
  if (!category) return notFound();
  const filtered = products.filter((p) => p.category === category.id);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((prod) => (
          <Link key={prod.id} href={`/product/${prod.id}`} className="block rounded-lg shadow hover:shadow-lg transition bg-white">
            <div className="relative aspect-[4/3] w-full max-w-[350px] mx-auto">
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="p-4 text-center font-semibold text-lg">{prod.name}<br/><span className='text-pink-600 font-bold'>₹{prod.price}</span></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
