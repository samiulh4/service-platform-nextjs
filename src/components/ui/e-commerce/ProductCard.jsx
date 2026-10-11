import Link from "next/link";

export default function ProductCard({ product }) {
    const discountedPrice = (
        product.price -
        (product.price * product.discountPercentage) / 100
    ).toFixed(2);

    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating - fullStars >= 0.5;

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
            {/* Image */}
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {product.discountPercentage > 0 && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        -{product.discountPercentage}%
                    </span>
                )}
                {product.availabilityStatus === "In Stock" ? (
                    <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded">
                        In Stock
                    </span>
                ) : (
                    <span className="absolute top-3 right-3 bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
                        Out of Stock
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category & Brand */}
                <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {product.category}
                    </span>
                    {product.brand && (
                        <span className="text-xs text-blue-600 font-medium">
                            {product.brand}
                        </span>
                    )}
                </div>

                {/* Title */}
                <Link href={`/e-commerce/products/${product.id}`}>
                    <h3 className="text-gray-800 font-semibold text-sm leading-tight mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {product.title}
                    </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }, (_, i) => (
                            <svg
                                key={i}
                                className={`h-3.5 w-3.5 ${
                                    i < fullStars
                                        ? "fill-current"
                                        : i === fullStars && hasHalfStar
                                        ? "fill-current opacity-50"
                                        : "fill-gray-300"
                                }`}
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">
                        ({product.rating})
                    </span>
                    <span className="text-xs text-gray-400 ml-auto">
                        {product.reviews?.length ?? 0} reviews
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-900">
                        ${discountedPrice}
                    </span>
                    {product.discountPercentage > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                            ${product.price.toFixed(2)}
                        </span>
                    )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {product.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Shipping & Warranty */}
                <div className="text-xs text-gray-500 space-y-1 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {product.shippingInformation}
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        {product.warrantyInformation}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}