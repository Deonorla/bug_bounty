import React from "react";
import bounty from "../assets/bounty.jpg";
import Heading from "../components/design/Heading";
const SignUp = () => {
  return (
    <div className="">
      <div className="relative flex justify-center items-center ">
        <img
          className="w-full h-screen object-cover md:object-left opacity-20"
          src={bounty}
          alt="bounty "
        />
      </div>
      <div className="absolute top-[1rem] m-auto  right-[1rem] w-[50%] justify-center p-4 z-1 flex  h-[39rem] mb-5  border border-n-1/10 rounded-3xl  xl:h-[46rem]">
        <h1 className={` text-[1.5rem] mb-6  text-center mt-4`}>
          {" "}
          Login to
          <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
            {" "}
            Bug Bounty
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
