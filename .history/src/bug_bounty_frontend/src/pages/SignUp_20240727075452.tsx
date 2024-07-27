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
      <div className="absolute right-0  z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl  lg:p-20 xl:h-[46rem]">
        <Heading
          className=" text-center px-8 md:px-0 mb-[3rem] md:my-[5rem]"
          title="Login to"
          span=" Bug Bounty"
        />
      </div>
    </div>
  );
};

export default SignUp;
