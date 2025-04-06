import ProductCard from '@/components/ProductCard';

const cars = [
  { id: '1', name: 'Toyota Camry', price: '$25,000' },
  { id: '2', name: 'BMW 3 Series', price: '$40,000' },
];

export default function CarsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <ProductCard key={car.id} {...car} type="car" />
        ))}
      </div>
    </div>
  );
}
