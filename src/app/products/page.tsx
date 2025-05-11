// app/products/page.tsx or pages/products.tsx (depending on App Router vs Pages Router)
import Link from 'next/link';
import { products } from '../../data/data.json'

export default function ProductsPage() {

    return (
        <main className="px-6 py-16 md:px-20 bg-gray-50">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-12">
                Our Products
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <Link href={`product/${product?.slug}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-green-800 mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-700 text-sm">{product.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
