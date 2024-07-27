import React from "react";
import { GlareCard } from "../ui/glare-card";
import { IoBug } from "react-icons/io5";

const BountyCard = () => {
  return (
    <GlareCard className="flex flex-col  items-center justify-center">
      <div className="">
        <IoBug />
      </div>
    </GlareCard>
  );
};

export default BountyCard;
