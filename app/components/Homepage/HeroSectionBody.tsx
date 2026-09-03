import React from 'react';
import FirstNewsCard from "~/components/Homepage/FirstNewsCard";
import NewsList from "~/components/Homepage/NewsList";

const HeroSectionBody = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between 2xl:gap-10 xl:gap-8 gap-6">
      <FirstNewsCard />
      <div className="dark-mode-bg-alt bg-white flex flex-col lg:flex-col rounded-2xl lg:w-1/3">
        <h2 className="font-semibold text-2xl p-[1rem_1rem_0]">Recent news</h2>
        <NewsList />
      </div>
    </div>
  );
};

export default HeroSectionBody;