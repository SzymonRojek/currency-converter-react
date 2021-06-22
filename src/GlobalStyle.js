import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
 
  ${normalize}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    font-family: 'Antonio', sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor.primaryBody};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;