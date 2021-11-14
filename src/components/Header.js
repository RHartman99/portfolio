import React from "react";
import tw from "twin.macro";
import Logo from "./Logo";

const Component = tw.header`absolute top-0 left-0 w-full p-4 z-50`;

const Header = ({ ...rest }) => {
  return (
    <Component {...rest}>
      <Logo />
    </Component>
  );
};

export default Header;
