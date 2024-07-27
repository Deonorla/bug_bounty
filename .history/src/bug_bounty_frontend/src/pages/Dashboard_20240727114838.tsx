import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <Sidebar />

      <div className="mt-24 ">
        <h2 className="text-white text-xl">Bounties</h2>
      </div>
    </div>
  );
};

export default Dashboard;
