import { Car } from '@/types';
import Link from 'next/link';

export default function ProductCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{car.name}</h2>
        <p className="text-gray-600">{car.brand}</p>
        <p className="text-green-600 font-semibold">${car.price.toLocaleString()}</p>
        <Link
          href={`/product/${car.id}`}
          className="inline-block mt-2 text-sm text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
