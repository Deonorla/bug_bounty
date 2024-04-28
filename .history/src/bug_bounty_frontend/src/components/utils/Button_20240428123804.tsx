import React from "react";
import ButtonSvg from "../../assets/svg/ButtonSvg";

interface Props {
  className?: string;
  onClick?: () => any;
  href?: string;
  children?: any;
  px?: string;
  white?: string;
}

const Button = ({ className, href, onClick, children, px, white }: Props) => {
  const classes = ` button relative inline-flex items-center 
    justify-center h-11 transition-colors hover:text-n-1 ${
      px || "px-7"
    } hover:text-n-1 ${className || ""}`;

  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  return renderButton();
};

export default Button;
