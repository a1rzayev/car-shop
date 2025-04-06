const cars = [
  { id: "1", name: "Toyota Camry", price: "$25,000" },
  { id: "2", name: "BMW 3 Series", price: "$40,000" },
];

export default function CarsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Cars</h1>
      <ul className="space-y-2">
        {cars.map((car) => (
          <li key={car.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{car.name}</h2>
            <p>{car.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
