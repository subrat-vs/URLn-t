import React from "react";
import ShortenForm from "./components/ShortenForm";
import ResultCard from "./components/ResultCard";
import UrlList from "./components/UrlList";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-olive-100 p-4 select-none">
        <div className="h-60 flex flex-col justify-center items-end px-24 gap-6">
          <h1 className="text-7xl font-mono">Long Link?</h1>
          <p className="text-sm border-b w-fit">
            Paste a link, get a short one, see how many people clicked it.
          </p>
        </div>

        <div className="border h-120 flex gap-12 px-12 py-6">
          <div className=" w-1/3 flex flex-col gap-12">
            <ShortenForm />
            <UrlList />
          </div>

          <div className="w-2/3 p-6 flex flex-col overflow-auto gap-8 no-scrollbar">
          <h1 className="text-2xl font-mono border-b w-fit">Your links</h1>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
