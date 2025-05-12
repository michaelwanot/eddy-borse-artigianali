// Homepage – Layout coerente con la proposta visiva

import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#3d3d3d]">
      <Head>
        <title>Borse Artigianali</title>
        <meta name="description" content="Borse fatte a mano all'uncinetto" />
      </Head>

      {/* Navbar */}
      <header className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-serif tracking-wider">ARTI FILATE</h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <Link href="/about" className="hover:underline">Chi siamo</Link>
          <Link href="/contact" className="hover:underline">Contatti</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 bg-[#FDFCF9] grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Eleganza artigianale fatta a mano
          </h2>
          <p className="text-lg text-[#555] max-w-md">
            Scopri la nuova collezione di borse all’uncinetto, realizzate con cura, passione e materiali naturali.
          </p>
          <Link href="/shop" className="inline-block bg-[#D6B0A4] text-white px-6 py-3 rounded-full shadow hover:bg-[#c29b91] transition">
            Esplora la collezione
          </Link>
        </div>
        <div>
          <img
            src="/hero-bag.jpg"
            alt="Borsa artigianale"
            className="rounded-3xl shadow-xl w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Valori */}
      <section className="bg-white py-16 px-6 grid md:grid-cols-3 gap-10 text-center">
        <div>
          <img src="/icon-eco.svg" alt="eco" className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Materiali naturali</h3>
          <p className="text-sm text-[#666]">Ogni borsa è realizzata con filati naturali, eco-compatibili e di alta qualità.</p>
        </div>
        <div>
          <img src="/icon-hand.svg" alt="handmade" className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fatto a mano</h3>
          <p className="text-sm text-[#666]">Ogni creazione è un pezzo unico, frutto di ore di lavoro artigianale.</p>
        </div>
        <div>
          <img src="/icon-heart.svg" alt="passione" className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Passione vera</h3>
          <p className="text-sm text-[#666]">Portiamo con orgoglio l’amore per l’artigianato in ogni dettaglio.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[#f0e9e2] text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Lasciati ispirare</h2>
        <p className="max-w-xl mx-auto mb-8 text-[#555]">
          Acquista un pezzo che racconta una storia. Ogni borsa è diversa, proprio come chi la indossa.
        </p>
        <Link href="/shop" className="inline-block bg-[#D6B0A4] text-white px-6 py-3 rounded-full shadow hover:bg-[#c29b91] transition">
          Vai allo shop
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-[#888] border-t">
        © 2025 Arti Filate — Tutti i diritti riservati
      </footer>
    </div>
  );
}
