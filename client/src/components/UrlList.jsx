import React from "react";
import { Copy } from "lucide-react";

const UrlList = () => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "example.com/blog/2026/09/how-to-learn-backend",
      );
      console.log("Copied!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div className="p-4 flex justify-between bg-white rounded shadow-md">
      <p>localhost:3000/aZ3kP9</p>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1 px-2 py-1.5 uppercase cursor-pointer hover:bg-gray-100 active:scale-95 transition"
        aria-label="Copy link"
      >
        <Copy size={12} />
        <span className="text-xs">Copy</span>
      </button>
    </div>
  );
};

export default UrlList;
