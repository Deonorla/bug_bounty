import React from "react";
import Header from "../components/Header";
import Hero from "../components/landingPageSection/Hero";
import Features from "../components/landingPageSection/Features";
import Services from "../components/landingPageSection/Services";
import Roadmap from "../components/landingPageSection/Roadmap";
import Footer from "../components/landingPageSection/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
const LandingPage = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] ">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Roadmap />
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default LandingPage;
