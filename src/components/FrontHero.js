import React, { useEffect, useRef, useState } from "react";
import tw, { styled, css } from "twin.macro";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import AnimatedTitle from "./AnimatedTitle";
import { keyframes } from "styled-components";

const Section = styled.section`
  ${tw`w-full text-center text-white min-h-screen relative bg-secondary flex flex-col items-center justify-center overflow-hidden`}
  & > * {
    ${tw`relative z-20`}
  }
`;

const Title = styled.h1`
  ${tw`text-4xl md:text-6xl -mx-4`}

  & > span:last-child {
    ${tw`font-bold`}
  }

  & > span {
    ${tw`px-1 md:px-2`}
  }
`;

const Background = styled.div(({ loaded }) => [
  tw`w-full h-full object-cover absolute opacity-0 transition-all scale-150 duration-1000 ease-in-out z-10`,
  loaded && tw`opacity-100 scale-100`,
]);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Description = styled.p(({ paused, delay }) => [
  tw`text-xl mt-4 opacity-0 leading-relaxed relative`,
  css`
    max-width: 400px;
  `,
  !paused &&
    css`
      animation: ${fadeIn} 0.6s ease-in-out forwards;
      animation-delay: ${delay + 0.75}s;
    `,
]);

const Corner = styled.div`
  ${tw`absolute top-0 left-0`}
  &:after,
  &:before {
    ${tw`content[''] flex bg-primary opacity-40 absolute top-0 left-0`}
  }

  &:after {
    width: 15px;
    height: 2px;
  }

  &:before {
    width: 2px;
    height: 15px;
  }
`;

const grow = keyframes`
  from {
    padding: 0 6rem;
    max-height: 0;
  }

  to {
    padding: 6rem;
    max-height: 100vh;
  }
`;

const Content = styled.div(({ paused }) => [
  tw`px-12 bg-opacity-30 max-h-0 overflow-hidden h-screen w-full md:(h-auto w-auto px-24) flex flex-col items-center justify-center`,
  css`
    background-color: #06112380;
  `,
  !paused &&
    css`
      animation: ${grow} 1s ease-in-out forwards;
    `,
]);

const FrontHero = ({ ref: _, title, description, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const vantaEffect = useRef(null);
  const heroRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: heroRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: "#2496C3",
        backgroundColor: "#0C1B33",
      });
      setLoaded(true);
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, [vantaEffect]);

  return (
    <Section {...rest}>
      <Background
        tw="w-full h-full object-cover absolute top-0 left-0 bg-secondary"
        loaded={loaded}
        ref={heroRef}
      ></Background>
      <Content paused={!loaded}>
        <AnimatedTitle paused={!loaded} component={Title} delay={0.5}>
          {title}
        </AnimatedTitle>
        <Description paused={!loaded} delay={(title.length + 3) * 0.03}>
          {description}
        </Description>
        <Corner />
        <Corner tw="rotate-90 top-0 right-0 left-auto" />
        <Corner tw="rotate-180 top-auto bottom-0 right-0 left-auto" />
        <Corner tw="-rotate-90 top-auto bottom-0" />
      </Content>
    </Section>
  );
};

export default FrontHero;
