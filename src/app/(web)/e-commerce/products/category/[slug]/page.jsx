import Link from "next/link";
import ProductCard from "@/components/ui/e-commerce/ProductCard";

export default async function CategoryProductsPage({ params }) {
    const { slug } = await params;
    const response = await fetch(`https://dummyjson.com/products/category/${slug}?limit=12&skip=0`);
    if (!response.ok) {
        throw new Error("Failed to fetch category products");
    }
    const data = await response.json();
    const categoryName = slug.replace(/-/g, " ");

    return (
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
                <ol className="flex items-center gap-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li>/</li>
                    <li><Link href="/e-commerce/products" className="hover:text-blue-600">Products</Link></li>
                    <li>/</li>
                    <li className="text-gray-900 font-medium capitalize">{categoryName}</li>
                </ol>
            </nav>

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900 capitalize">{categoryName}</h1>
                <span className="text-sm text-gray-500">{data.total} products</span>
            </div>

            {data.products.length === 0 ? (
                <p className="text-gray-500">No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </main>
    );
}
