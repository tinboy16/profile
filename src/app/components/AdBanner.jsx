import React from "react";

export default function AdBanner() {
  return (
    <div className="w-full bg-[#1f1f1f] text-yellow-400 text-center py-2 z-50 fixed top-0 left-0 shadow-md flex items-center justify-center gap-4">
      <span>🚀 Stake INT with validator tinboy – Earn rewards, stay ahead!</span>
      <a
        href="https://stake.devnet.inference.net/operator/68mqSkyfjVCQ5zjxBCLqWuAkxUJR2bjtn9K8CT8kJdvD/overview" // 👉 thay bằng link thật
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition"
      >
        Stake Now
      </a>
    </div>
  );
}
