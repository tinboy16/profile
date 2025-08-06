import React from "react";

export default function AdBanner() {
  return (
    <div className="w-full bg-[#111827] text-white text-center py-2 z-50 fixed top-0 left-0 shadow-md flex items-center justify-center gap-4">
      <span>🚀 Stake INT with validator tinboy – Earn rewards, stay ahead!</span>
      <a
        href="https://stake.devnet.inference.net/operator/68mqSkyfjVCQ5zjxBCLqWuAkxUJR2bjtn9K8CT8kJdvD/overview"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition"
      >
        Stake Now
      </a>
    </div>
  );
}
