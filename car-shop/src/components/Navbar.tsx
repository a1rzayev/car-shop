"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        CarShop
      </Link>
      <div className="space-x-4">
        <Link href="/cars">Cars</Link>
        <Link href="/parts">Parts</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
