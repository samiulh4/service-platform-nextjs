export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          &copy; 2026 Service Platform. All rights reserved.
        </p>
        <p className="text-sm italic text-gray-500">
          Managed by{" "}
          <span className="font-bold not-italic text-gray-700">
            Invest Bangladesh
          </span>
        </p>
      </div>
    </footer>
  );
}
