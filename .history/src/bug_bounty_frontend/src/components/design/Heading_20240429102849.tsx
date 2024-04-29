import React from "react";
interface Props {
  className?: string;
  title?: string;
  span?: string;
}

const Heading = ({ className, title, span }: Props) => {
  return (
    <h1 className={`${className} h3 mb-6 mt-[2rem] text-center `}>
      {" "}
      {title}
      <span className="bg-gradient-to-r from-linear-1  to-linear-2  text-[transparent] bg-clip-text">
        {title}
      </span>
    </h1>
  );
};

export default Heading;
