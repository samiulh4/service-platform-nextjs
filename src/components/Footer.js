export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <p className="text-sm italic text-gray-500">
          Managed by{" "}
          <span className="font-bold not-italic text-gray-700">
            Invest Bangladesh
          </span>
        </p>
        <button
          type="button"
          aria-label="Help"
          className="w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}
