import React from "react";
import Header from "../components/Header";
import Hero from "../components/landingPageSection/Hero";
import Features from "../components/landingPageSection/Features";
import Services from "../components/landingPageSection/Services";

const LandingPage = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Header />
      <Hero />
      <Features />
      <Services />
    </div>
  );
};

export default LandingPage;
