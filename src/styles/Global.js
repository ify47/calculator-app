import { createGlobalStyle } from "styled-components";
const backgroundColor = "hsl(222, 26%, 31%)";
const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'League Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyles;
