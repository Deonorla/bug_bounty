import React from "react";
import ButtonSvg from "../../assets/svg/ButtonSvg";

const Button = ({ clasName, href, onClick, children, px, white }) => {
  const renderButton = () => (
    <button>
      <span>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  return;
};

export default Button;
