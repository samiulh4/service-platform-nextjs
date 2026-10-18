"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Image/Logo";

export default function Header({ onToggleSidebar }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-3 h-16 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            aria-label="Toggle sidebar"
            onClick={onToggleSidebar}
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link href="/admin" className="flex items-center gap-3 min-w-0">
            <Logo className="w-20 sm:w-24 md:w-28 flex-shrink-0" />
            <span className="hidden sm:block pl-3 border-l border-gray-200 leading-tight min-w-0">
              <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
                Service Platform
              </span>
              <span className="block text-[15px] font-bold text-[#2E9BE6] truncate">
                Admin Panel
              </span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-10 pl-9 pr-3 text-sm rounded-md border border-gray-200 bg-gray-50 outline-none focus:bg-white focus:border-[#2E9BE6] transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            aria-label="Notifications"
            className="relative h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px] text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
          </button>

          <button
            type="button"
            aria-label="Toggle fullscreen"
            className="hidden sm:flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px] text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0-4h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 pl-2 pr-3 h-10 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-[#2E9BE6]/15 text-[#2E9BE6] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                MS
              </span>
              <span className="hidden md:block text-left leading-tight">
                <span className="flex items-center gap-1">
                  <span className="text-[12px] font-bold text-gray-700 tracking-wide whitespace-nowrap">
                    MD. SAMIUL HAQUE
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 h-3 text-gray-500 transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                <span className="block text-[11px] italic text-gray-400">
                  Last login: 19-Aug-2026 03:32
                </span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-3 h-3 text-gray-500 transition-transform md:hidden ${
                  profileOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm font-medium text-[#2E9BE6] bg-[#2E9BE6]/10"
                >
                  My Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
                >
                  Company association
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
                >
                  Switch Company
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
                >
                  Notification
                </a>
                <div className="my-1 border-t border-gray-100" />
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-red-500 hover:bg-red-50"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
