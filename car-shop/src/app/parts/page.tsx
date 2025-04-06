const parts = [
  { id: "1", name: "Brake Pads", price: "$50" },
  { id: "2", name: "Engine Oil", price: "$30" },
];

export default function PartsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Car Parts</h1>
      <ul className="space-y-2">
        {parts.map((part) => (
          <li key={part.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{part.name}</h2>
            <p>{part.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
