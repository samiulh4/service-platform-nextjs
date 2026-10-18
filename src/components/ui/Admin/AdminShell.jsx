"use client";

import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function AdminShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
      <Nav />
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
