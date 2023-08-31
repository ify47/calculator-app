import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import Calculator from "./page/Calculator";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={currentTheme}>
      <main>
        <GlobalStyles />
        <Calculator />
      </main>
    </ThemeProvider>
  );
}

export default App;
