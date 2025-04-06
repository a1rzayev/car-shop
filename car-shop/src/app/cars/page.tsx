// app/cars/page.tsx
'use client';

import { exampleCars } from '@/lib/exampleCars';
import ProductCard from '@/components/ProductCard';

export default function CarsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {exampleCars.map((car) => (
          <ProductCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
