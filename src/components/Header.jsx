import React, { useContext } from "react";
import {
  HeaderContainer,
  StyledInput,
  StyledToggle,
  ThemeSelection,
} from "../styles/Header.styles";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const buttons = [
    { id: "one", value: "themeOne" },
    { id: "two", value: "themeTwo" },
    { id: "three", value: "themeThree" },
  ];

  const { activeTheme, handleThemeChange } = useContext(ThemeContext);

  return (
    <header>
      <ThemeSelection>1 2 3</ThemeSelection>
      <HeaderContainer>
        <h1>calc</h1>
        <h2>THEME</h2>
        <StyledToggle>
          {buttons.map((button) => (
            <StyledInput
              key={button.id}
              type="radio"
              name="toggle"
              id={button.id}
              checked={activeTheme === button.value}
              onChange={() => handleThemeChange(button.value)}
            />
          ))}
        </StyledToggle>
      </HeaderContainer>
    </header>
  );
};

export default Header;
