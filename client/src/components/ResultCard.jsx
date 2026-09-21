import React from "react";
import { Copy, Trash2 } from "lucide-react";

const ResultCard = () => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("example.com/blog/2026/09/how-to-learn-backend");
      console.log("Copied!");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  return (
    <div className="w-full min-w-0 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3 sm:gap-6 min-w-0 border-b">
          <span className="shrink-0 font-mono text-sm">
            aZ3kP9
          </span>

          <p className="min-w-0 truncate text-sm text-gray-600">
            example.com/blog/2026/09/how-to-learn-backend…ndkfdsbkffbalfbdgldbgabdelsb;lbsnfkdsbfksfbkfbskbnekfbskfbsdkfbdsfndkfsbfsk
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
          <span className="text-sm text-gray-500">
            5 clicks
          </span>

          <div className="flex items-center border text-xs">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2 py-1.5 uppercase cursor-pointer hover:bg-gray-100 active:scale-95 transition"
              aria-label="Copy link"
            >
              <Copy size={12} />
              <span>Copy</span>
            </button>

            <div className="h-4 border-l" />

            <button
              onClick={handleDelete}
              className="flex items-center gap-1 px-2 py-1.5 uppercase cursor-pointer hover:text-red-600 hover:bg-gray-100 active:scale-95 transition"
              aria-label="Delete link"
            >
              <Trash2 size={12} />
              <span>Delete</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultCard;