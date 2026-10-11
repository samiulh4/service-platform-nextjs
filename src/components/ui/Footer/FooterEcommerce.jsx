import Link from "next/link";
import Logo from "@/components/ui/Image/Logo";

export default function FooterEcommerce() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Newsletter Section */}
            <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white text-lg font-semibold">Subscribe to our newsletter</h3>
                        <p className="text-sm text-gray-400 mt-1">Get the latest deals, updates and more.</p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 md:w-72 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-r-lg transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/">
                            <Logo className="w-32 sm:w-40" />
                        </Link>
                        <p className="mt-4 text-sm text-gray-400 max-w-sm">
                            Your one-stop shop for quality products at the best prices. Fast shipping, easy returns, and exceptional customer service.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {/* Facebook */}
                            <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            {/* Twitter / X */}
                            <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="text-gray-400 hover:text-white" aria-label="YouTube">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link href="/categories/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
                            <li><Link href="/categories/clothing" className="hover:text-white transition-colors">Clothing</Link></li>
                            <li><Link href="/categories/home" className="hover:text-white transition-colors">Home & Garden</Link></li>
                            <li><Link href="/categories/sports" className="hover:text-white transition-colors">Sports</Link></li>
                            <li><Link href="/deals" className="hover:text-white transition-colors">Deals & Offers</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                            <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
                            <li><Link href="/order-tracking" className="hover:text-white transition-colors">Order Tracking</Link></li>
                            <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">&copy; 2026 Service Platform. All rights reserved.</p>
                    <div className="flex items-center space-x-4">
                        {/* Payment Icons */}
                        <span className="text-xs text-gray-500">We accept:</span>
                        <div className="flex space-x-2 text-gray-400">
                            <span className="px-2 py-1 border border-gray-600 rounded text-xs">Visa</span>
                            <span className="px-2 py-1 border border-gray-600 rounded text-xs">Mastercard</span>
                            <span className="px-2 py-1 border border-gray-600 rounded text-xs">PayPal</span>
                            <span className="px-2 py-1 border border-gray-600 rounded text-xs">Stripe</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}