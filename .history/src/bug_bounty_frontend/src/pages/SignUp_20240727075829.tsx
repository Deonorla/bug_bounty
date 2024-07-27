import React from "react";
import bounty from "../assets/bounty.jpg";
import Heading from "../components/design/Heading";
const SignUp = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          className="w-full h-screen object-cover md:object-left opacity-50"
          src={bounty}
          alt="bounty "
        />
      </div>
      <div className="absolute right-0  z-1 flex  h-[39rem] mb-5 p-4 border border-n-1/10 rounded-3xl  lg:p-20 xl:h-[46rem]">
        <h1 className={` text-[1rem] mb-6  text-center `}>
          {" "}
          Login to
          <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            Bug Bounty
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
