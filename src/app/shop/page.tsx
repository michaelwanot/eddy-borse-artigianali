// Pagina Shop – Elenco prodotti con effetto visivo di aggiunta al carrello

'use client'

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useCart } from '@/context/CartContext';

const products = [
  {
    id: 1,
    name: "Borsa Primavera",
    price: "79",
    image: "/products/borsa-primavera.jpg"
  },
  {
    id: 2,
    name: "Borsa Mare",
    price: "89",
    image: "/products/borsa-mare.jpg"
  },
  {
    id: 3,
    name: "Borsa Classica",
    price: "99",
    image: "/products/borsa-classica.jpg"
  },
];

export default function Shop() {
  const { dispatch } = useCart();
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({ type: 'ADD_ITEM', product });
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#3d3d3d]">
      <Head>
        <title>Shop - Borse Artigianali</title>
        <meta name="description" content="Acquista borse artigianali fatte a mano all'uncinetto" />
      </Head>

      <header className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-serif tracking-wider">ARTI FILATE</h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">Chi siamo</Link>
          <Link href="/contact" className="hover:underline">Contatti</Link>
        </nav>
      </header>

      <main className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif mb-12 text-center">La nostra collezione</h2>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition group">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-2xl mb-4 object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-serif mb-1 text-[#3d3d3d] group-hover:underline">
                {product.name}
              </h3>
              <p className="text-[#a8745b] font-semibold text-base">€ {product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-6 w-full bg-[#D6B0A4] text-white py-2.5 rounded-full font-medium shadow hover:bg-[#c29b91] transition"
              >
                Aggiungi al carrello
              </button>

              {addedProductId === product.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-3xl">
                  <span className="text-green-600 font-semibold">Aggiunto al carrello ✓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white text-center py-6 text-sm text-[#888] border-t">
        © 2025 Arti Filate — Tutti i diritti riservati
      </footer>
    </div>
  );
}
