"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProductDetail({ product }) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const discountedPrice = (
        product.price -
        (product.price * product.discountPercentage) / 100
    ).toFixed(2);

    const savings = (product.price - discountedPrice).toFixed(2);
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating - fullStars >= 0.5;

    return (
        <div className="bg-white">
            {/* Breadcrumb */}
            <nav className="max-w-7xl mx-auto px-4 lg:px-8 py-4 text-sm text-gray-500">
                <ol className="flex items-center gap-2">
                    <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                    <li>/</li>
                    <li><Link href="/e-commerce/products" className="hover:text-blue-600">Products</Link></li>
                    <li>/</li>
                    <li><Link href={`/e-commerce/products/category/${product.category}`} className="hover:text-blue-600 capitalize">{product.category}</Link></li>
                    <li>/</li>
                    <li className="text-gray-900 font-medium truncate max-w-[200px]">{product.title}</li>
                </ol>
            </nav>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* === LEFT: Images === */}
                    <div>
                        {/* Main Image */}
                        <div className="relative aspect-square bg-gray-50 rounded-xl border border-gray-200 overflow-hidden mb-4">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.title}
                                className="w-full h-full object-contain p-6"
                            />
                            {product.discountPercentage > 0 && (
                                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-lg">
                                    -{product.discountPercentage}%
                                </span>
                            )}
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="flex gap-3">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedImage(i)}
                                    className={`w-20 h-20 rounded-lg border-2 overflow-hidden flex-shrink-0 transition-all ${
                                        selectedImage === i
                                            ? "border-blue-600 ring-2 ring-blue-200"
                                            : "border-gray-200 hover:border-gray-400"
                                    }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.title} ${i + 1}`}
                                        className="w-full h-full object-contain p-1"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* === RIGHT: Info === */}
                    <div className="flex flex-col">
                        {/* Category & Brand */}
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                {product.category}
                            </span>
                            {product.brand && (
                                <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">
                                    {product.brand}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            {product.title}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-yellow-400">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <svg
                                        key={i}
                                        className={`h-5 w-5 ${
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
                            <span className="text-sm text-gray-600">{product.rating}</span>
                            <span className="text-sm text-gray-400">({product.reviews?.length ?? 0} reviews)</span>
                        </div>

                        {/* Price Block */}
                        <div className="bg-gray-50 rounded-xl p-5 mb-6">
                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-gray-900">${discountedPrice}</span>
                                {product.discountPercentage > 0 && (
                                    <>
                                        <span className="text-lg text-gray-400 line-through">${product.price.toFixed(2)}</span>
                                        <span className="text-sm text-green-600 font-medium">You save ${savings}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2 mb-4">
                            {product.availabilityStatus === "In Stock" ? (
                                <>
                                    <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                                    <span className="text-sm text-green-700 font-medium">{product.availabilityStatus}</span>
                                    <span className="text-sm text-gray-400">({product.stock} available)</span>
                                </>
                            ) : (
                                <>
                                    <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
                                    <span className="text-sm text-red-700 font-medium">{product.availabilityStatus}</span>
                                </>
                            )}
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-l-lg transition-colors"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 text-gray-900 font-medium min-w-[48px] text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-r-lg transition-colors"
                                >
                                    +
                                </button>
                            </div>
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Add to Cart
                            </button>
                            <button className="p-3 border border-gray-300 rounded-lg text-gray-500 hover:text-red-500 hover:border-red-300 transition-colors">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {product.tags?.map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                            <div className="flex items-start gap-3">
                                <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500">Shipping</p>
                                    <p className="text-sm text-gray-800 font-medium">{product.shippingInformation}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500">Warranty</p>
                                    <p className="text-sm text-gray-800 font-medium">{product.warrantyInformation}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500">Return Policy</p>
                                    <p className="text-sm text-gray-800 font-medium">{product.returnPolicy}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500">Min. Order</p>
                                    <p className="text-sm text-gray-800 font-medium">{product.minimumOrderQuantity} unit{product.minimumOrderQuantity > 1 ? "s" : ""}</p>
                                </div>
                            </div>
                        </div>

                        {/* SKU & Barcode */}
                        <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-400">
                            <span>SKU: {product.sku}</span>
                            <span>Barcode: {product.meta?.barcode}</span>
                            <span>Weight: {product.weight}kg</span>
                            {product.dimensions && (
                                <span>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</span>
                            )}
                        </div>
                    </div>
                </div>

                {/* === REVIEWS === */}
                <section className="mt-12 border-t border-gray-200 pt-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.reviews?.map((review, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                {/* Reviewer Header */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm">
                                            {review.reviewerName.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{review.reviewerName}</p>
                                            <p className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                                        </div>
                                    </div>
                                    {/* Stars */}
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: 5 }, (_, j) => (
                                            <svg
                                                key={j}
                                                className={`h-4 w-4 ${j < review.rating ? "fill-current" : "fill-gray-300"}`}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}