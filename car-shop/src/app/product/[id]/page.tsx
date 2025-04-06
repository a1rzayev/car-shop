"use client"

import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <p>Product ID: {id}</p>
      <p>More product info coming soon...</p>
    </div>
  );
}
