import React from "react";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import Bounties from "./Bounties";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <section className="flex">
        <Sidebar />
        <Bounties />
      </section>
    </div>
  );
};

export default Dashboard;
