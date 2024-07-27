import React from "react";
import bounty from "../assets/bounty.jpg";
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
    </div>
  );
};

export default SignUp;
