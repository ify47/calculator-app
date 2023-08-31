import React, { useState } from "react";
import {
  HeaderContainer,
  StyledInput,
  StyledToggle,
} from "../styles/Header.styles";

const Header = () => {
  const buttons = [
    { id: "one", label: "button one" },
    { id: "two", label: "button two" },
    { id: "three", label: "button three" },
  ];

  const [activeTheme, setActiveTheme] = useState("one");

  const handleThemeClick = (id) => {
    setActiveTheme(id);
  };

  console.log(activeTheme);

  return (
    <header>
      <div className="me">1 2 3</div>
      <HeaderContainer>
        <h2>Calc</h2>
        <StyledToggle>
          {buttons.map((button) => (
            <StyledInput
              key={button.id}
              type="radio"
              name="toggle"
              id={button.id}
              onClick={() => handleThemeClick(button.id)}
              checked={activeTheme === button.id}
              onChange={(e) => {}}
            />
          ))}
        </StyledToggle>
      </HeaderContainer>
    </header>
  );
};

export default Header;
