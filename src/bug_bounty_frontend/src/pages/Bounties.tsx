import React from "react";
import BountyCard from "../components/bounty/BountyCard";

const Bounties = () => {
  return (
    <div className="sm:ml-8 mt-[5rem] flex flex-col w-full">
      <h2 className="text-white text-xl">Bounties</h2>
      <p className=" mt-2 text-sm text-color-7 max-w-3xl  mb-6 lg:mb-8">
        Explore different bug bounties
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:grid-cols-5">
        <BountyCard />
      </div>
    </div>
  );
};

export default Bounties;
