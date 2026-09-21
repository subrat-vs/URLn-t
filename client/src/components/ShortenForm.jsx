import React from "react";

const ShortenForm = () => {
  return (
    <div className="py-8 flex justify-center gap-8">
      <input
        className="border-b w-md text-sm outline-none px-4"
        type="text"
        placeholder="Paste a long URL here…"
      />
      <button className="bg-olive-800 px-6 py-2 text-white rounded hover:bg-olive-900 cursor-pointer active:scale-99">
        Shorten
      </button>
    </div>
  );
};

export default ShortenForm;
