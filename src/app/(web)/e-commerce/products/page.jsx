import ProductCard from "@/components/ui/e-commerce/ProductCard";

const sampleProduct = {
    id: 11,
    title: "Annibale Colombo Bed",
    description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
    price: 1899.99,
    discountPercentage: 8.57,
    rating: 4.77,
    stock: 88,
    tags: ["furniture", "beds"],
    brand: "Annibale Colombo",
    sku: "FUR-ANN-ANN-011",
    weight: 10,
    dimensions: { width: 28.16, height: 25.36, depth: 17.28 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
        { rating: 2, comment: "Would not recommend!", date: "2025-04-30T09:41:02.053Z", reviewerName: "Christopher West", reviewerEmail: "christopher.west@x.dummyjson.com" },
        { rating: 4, comment: "Highly impressed!", date: "2025-04-30T09:41:02.053Z", reviewerName: "Vivian Carter", reviewerEmail: "vivian.carter@x.dummyjson.com" },
        { rating: 1, comment: "Poor quality!", date: "2025-04-30T09:41:02.053Z", reviewerName: "Mason Wright", reviewerEmail: "mason.wright@x.dummyjson.com" },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 1,
    meta: { createdAt: "2026-05-31T06:08:47.181Z", updatedAt: "2026-06-02T19:49:21.474Z", barcode: "3610757456581", qrCode: "https://cdn.dummyjson.com/public/qr-code.png" },
    images: [
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
        "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp",
    ],
    thumbnail: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
};

export default async function ProductsPage() {
    const response = await fetch("https://dummyjson.com/products?limit=12&skip=0");
    if(!response.ok){
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return (
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* <ProductCard product={sampleProduct} /> */}
                {data.products.map(product =>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}