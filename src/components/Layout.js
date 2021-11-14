import React from "react";
import { GlobalStyles as BaseStyles } from "twin.macro";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
const GlobalStyles = createGlobalStyle`
  body {
    font-family: Montserrat, sans-serif;
    color: #1c1c1c;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <BaseStyles />
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
