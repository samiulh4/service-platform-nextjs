

import Link from "next/link";
import Logo from "@/components/ui/Image/Logo";

export default async function NavEcommerce() {
    const response = await fetch("https://dummyjson.com/products/categories");
    if(!response.ok){
        throw new Error("Failed to fetch categories");
    }
    const categories = await response.json();
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto lg:px-8 sm:px-4">
                {/* Top Bar */}
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Logo className="w-32 sm:w-40 md:w-48" />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-xl mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-6">
                        {/* User Account */}
                        <Link href="/account" className="text-gray-700 hover:text-blue-600 flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-xs mt-1">Account</span>
                        </Link>

                        {/* Wishlist */}
                        <Link href="/wishlist" className="text-gray-700 hover:text-blue-600 flex flex-col items-center relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="text-xs mt-1">Wishlist</span>
                        </Link>

                        {/* Cart */}
                        <Link href="/cart" className="text-gray-700 hover:text-blue-600 flex flex-col items-center relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                            <span className="text-xs mt-1">Cart</span>
                        </Link>
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="hidden md:flex items-center space-x-8 py-3 border-t border-gray-100">
                    <Link href="/e-commerce/products" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                        All Products
                    </Link>
                    {categories.map(category => (
                        <Link href={category.url} className="text-gray-700 hover:text-blue-600 text-sm font-medium" key={category.slug}>
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}