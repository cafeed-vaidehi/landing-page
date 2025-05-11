"use client"
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { products } from "@/data/data.json";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const data = products.filter((product) => product?.slug.toString() === id);
    setProduct(data ? data[0] : null);
  }, []);

  if (!product) {
    return (
      <div className="h-full w-full">
        <Loader></Loader>
      </div>
    )
  }

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#f3f4f6] py-12 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{product?.name}</h1>
        <p className="text-sm text-gray-500">
          <Link href="/" className="underline">Home</Link> / <Link href="/products" className="underline">Products</Link> / {product?.name}
        </p>
      </section>

      {/* Product Info */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src={product?.image}
            alt="Daily Cattle Feed"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{product?.name}</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {product?.description}
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Rich in plant-based protein and essential minerals</li>
            <li>Boosts immunity and digestive health</li>
            <li>Ideal for cows, buffaloes, and goats</li>
            <li>Tested under stringent quality standards</li>
          </ul>
          <a
            href="mailto:export@cafeed.in?subject=Enquiry: Grand Master Daily Feed"
            className="inline-block px-6 py-3 bg-green-700 text-white font-medium rounded hover:bg-green-800 transition"
          >
            Enquire Now
          </a>
        </div>
      </section>

      {/* Additional Details (Optional) */}
      <section className="bg-[#f9fafb] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Why Choose Cafeed?</h3>
          <p className="text-gray-700">
            Cafeed stands for quality, integrity, and trust — serving the livestock industry for over 30 years. Our feeds are formulated to meet global standards while maintaining affordability and nutritional value.
          </p>
        </div>
      </section>
    </main>
  );
}
