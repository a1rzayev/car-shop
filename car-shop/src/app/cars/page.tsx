// app/cars/page.tsx
import { connectDB } from '@/lib/db';
import { Car } from '@/models/Car';
import ProductCard from '@/components/ProductCard';

interface CarProps {
  id: string;
  name: string;
  price: string;
  brand?: string;
  year?: number;
}

export default async function CarsPage() {
  await connectDB();
  
  // Get data from MongoDB and type the result
  const cars = await Car.find().lean().exec();  // Ensure exec() is called
  
  // Cast the result to `CarProps[]`
  const typedCars = cars.map((car) => ({
    id: car.id.toString(),
    name: car.name,
    price: car.price,
    brand: car.brand,
    year: car.year,
  })) as CarProps[];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {typedCars.map((car) => (
          <ProductCard
            key={car.id}
            id={car.id}
            name={car.name}
            price={car.price}
            type="car"
          />
        ))}
      </div>
    </div>
  );
}
