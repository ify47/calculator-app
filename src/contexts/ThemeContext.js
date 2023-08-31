import { createContext, useState } from "react";
import { themeOne, themeTwo, themeThree } from "../styles/Theme";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState(
    localStorage.getItem("activeTheme") || "themeOne"
  );

  const handleThemeChange = (id) => {
    setActiveTheme(id);

    localStorage.setItem("activeTheme", id);
  };

  let currentTheme;

  switch (activeTheme) {
    case "themeOne":
      currentTheme = themeOne;
      break;
    case "themeTwo":
      currentTheme = themeTwo;
      break;
    case "themeThree":
      currentTheme = themeThree;
      break;

    default:
      break;
  }

  return (
    <ThemeContext.Provider
      value={{ currentTheme, activeTheme, handleThemeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
