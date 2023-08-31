import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'League Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  transition: background-color 0.50s linear, color 0.50s linear;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyles;
