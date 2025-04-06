import ProductCard from '@/components/ProductCard';

const parts = [
  { id: '1', name: 'Brake Pads', price: '$50' },
  { id: '2', name: 'Engine Oil', price: '$30' },
];

export default function PartsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Car Parts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map((part) => (
          <ProductCard key={part.id} {...part} type="part" />
        ))}
      </div>
    </div>
  );
}
