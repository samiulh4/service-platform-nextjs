import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-6 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
