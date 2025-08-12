export default function AdBanner() {
  return (
    <div className="flex fixed top-0 left-0 w-full z-50 bg-[#111827] text-white text-center py-2 shadow-md items-center justify-center gap-2 md:gap-4 px-2">
      {/* Mobile text */}
      <span className="block md:hidden text-sm">
        🚀 Stake INT – Earn rewards!
      </span>
      {/* Desktop text */}
      <span className="hidden md:block">
        🚀 Stake INT with validator tinboy – Earn rewards, stay ahead!
      </span>
      <a
        href="https://stake.devnet.inference.net/operator/68mqSkyfjVCQ5zjxBCLqWuAkxUJR2bjtn9K8CT8kJdvD/overview"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition text-sm md:text-base"
      >
        Stake Now
      </a>
    </div>
  );
}
