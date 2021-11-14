import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { Link } from "gatsby";
import { useSpring, animated, config } from "react-spring";

const Square = styled(Link)`
  ${tw`relative flex items-center justify-center font-black text-white tracking-wide text-2xl transition-colors duration-500 ease-in-out hover:(border-primary text-primary)`}
  width: 80px;
  height: 75px;

  svg {
    ${tw`absolute flex`}

    transition: stroke 500ms ease-in-out, transform 500ms ease-in-out, stroke-width 500ms ease-in-out;
    stroke: white;
    stroke-width: 8;
  }

  &:hover svg {
    transform: rotate(180deg);
    stroke-width: 5;
    stroke: #2496c3;
  }
`;

const Logo = ({ ...rest }) => {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }));
  return (
    <Square
      {...rest}
      to="/"
      onMouseEnter={() => set({ x: 1 })}
      onMouseLeave={() => set({ x: 0 })}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.polygon
          points={x.to({
            output: [
              // This was horrible to do. My brain hurts. It's 3:30AM. help.
              "0,0   0,0   0,100  0,100  100,100  100,100  100,0  100,0",
              "30,3  3,30  3,69   30,96  69,96    96,69    96,30  69,3",
            ],
          })}
        />
      </svg>
      RH
    </Square>
  );
};

export default Logo;
