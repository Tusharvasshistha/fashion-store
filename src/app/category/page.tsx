import { categories } from '@/data/categories';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoriesPage() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/category/${cat.id}`} className="block rounded-lg shadow hover:shadow-lg transition bg-white">
            <div className="relative aspect-[4/3] w-full max-w-[350px] mx-auto">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
            <div className="p-4 text-center font-semibold text-lg">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
