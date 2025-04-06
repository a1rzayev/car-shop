import Link from 'next/link';

type ProductCardProps = {
  id: string;
  name: string;
  price: string;
  type: 'car' | 'part';
};

export default function ProductCard({ id, name, price, type }: ProductCardProps) {
  return (
    <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{price}</p>
      <Link
        href={`/product/${id}`}
        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View {type === 'car' ? 'Car' : 'Part'}
      </Link>
    </div>
  );
}
