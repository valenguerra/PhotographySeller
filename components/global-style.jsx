import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: unset;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: "DM Sans";
    background-attachment: fixed;
    background-color: #e6dfdf;
    user-select: none;
    overflow: overlay;
  }

  input, textarea, button {
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 9px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #FFFFFF30;
}
`;