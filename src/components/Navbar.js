"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
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
    <header className="relative bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left: Logo + Company */}
        <div className="flex items-center gap-3 min-w-0">
          <Image
            src="/images/logo.png"
            alt="BIDA Logo"
            width={40}
            height={40}
            className="flex-shrink-0"
            priority
          />

          <div className="hidden sm:block leading-[13px] flex-shrink-0 pr-3 border-r border-gray-200">
            <p className="text-[10.5px] font-semibold text-gray-700">
              Bangladesh
            </p>
            <p className="text-[10.5px] font-semibold text-gray-700">
              Investment
            </p>
            <p className="text-[10.5px] font-semibold text-gray-700">
              Development
            </p>
            <p className="text-[10.5px] font-semibold text-gray-700">
              Authority
            </p>
          </div>

          <div className="min-w-0 pl-1">
            <h1 className="text-[18px] font-bold text-[#2E9BE6] leading-tight truncate">
              Savar Industry Ltd (Joint Venture)
            </h1>
            <button
              type="button"
              className="flex items-center gap-1 text-[12px] font-medium text-[#2E9BE6] hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Switch Company
            </button>
          </div>
        </div>

        {/* Right: Icon actions + Profile */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px] text-gray-600"
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
          </button>

          {/* Home */}
          <button
            type="button"
            aria-label="Home"
            className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px] text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
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
          </button>

          {/* Fullscreen */}
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

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 pl-2 pr-3 h-10 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-gray-200 text-gray-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                MS
              </span>
              <span className="hidden md:block text-left leading-tight">
                <span className="flex items-center gap-1">
                  <span className="text-[12px] font-bold text-gray-700 tracking-wide whitespace-nowrap">
                    MD. SAMIUL HAQUE
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 h-3 text-gray-500 transition-transform ${profileOpen ? "rotate-180" : ""}`}
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
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-30">
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm font-medium text-sky-600 bg-sky-50"
                >
                  BIDA Services
                </a>
                <a
                  href="#"
                  className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
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
                  Users
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
