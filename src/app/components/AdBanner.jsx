export default function AdBanner() {
  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-center gap-2 bg-[#111827] px-2 py-2 text-center text-white shadow-md md:gap-4">
      {/* Mobile text */}
      <span className="block text-sm md:hidden">
        📖 Visit our Docs
      </span>

      {/* Desktop text */}
      <span className="hidden md:block">
        📖 Everything you need to get started is in our documentation.
      </span>

      <a
        href="https://docs.tinnguyen.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-gray-200 md:text-base"
      >
        Explore Docs
      </a>
    </div>
  );
}