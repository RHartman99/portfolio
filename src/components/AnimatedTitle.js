import React from "react";
import { keyframes } from "styled-components";
import tw, { styled, css } from "twin.macro";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
   transform: translateY(0rem);
   opacity: 100;
  }
`;

const Character = styled.span(({ number, delay, pause }) => [
  tw`opacity-0 inline-block transform translate-y-12`,
  !pause &&
    css`
      animation: ${fadeIn} 0.8s cubic-bezier(0.24, 0.57, 0.32, 1.57) forwards;
      animation-delay: ${number * 0.04 + delay}s;
    `,
]);
const Word = tw.span`px-2 whitespace-nowrap`;

const AnimatedTitle = ({ component: Component, paused, delay, children }) => {
  let charNum = 0;
  if (!delay) delay = 0;
  return (
    <Component>
      {children
        .split(/(\s+)/)
        .filter((c) => c.trim())
        .map((word, i) =>
          word.trim() ? (
            <Word className={`word word-${i + 1}`} key={i}>
              {word
                .trim()
                .split("")
                .map((char, j) => {
                  charNum++;
                  return (
                    <Character
                      key={j}
                      className={`char char-${j + 1}`}
                      number={charNum}
                      delay={delay}
                      pause={paused}
                    >
                      {char}
                    </Character>
                  );
                })}
            </Word>
          ) : null
        )}
    </Component>
  );
};

export default AnimatedTitle;
