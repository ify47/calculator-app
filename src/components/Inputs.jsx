import React from "react";
import {
  InputsField,
  SpecialChar,
  StyledButtons,
  Buttons,
  LastSpecialChar,
} from "../styles/Inputs.styles";
import useCalcHook from "../hooks/useCalcHook";

const Inputs = () => {
  const {
    handleChange,
    handleOperation,
    delButton,
    reset,
    equal,
    calculationDisplay,
  } = useCalcHook();
  return (
    <>
      <InputsField>{calculationDisplay}</InputsField>
      <StyledButtons>
        <Buttons value="7" onClick={handleChange}>
          7
        </Buttons>
        <Buttons value="8" onClick={handleChange}>
          8
        </Buttons>
        <Buttons value="9" onClick={handleChange}>
          9
        </Buttons>
        <SpecialChar value="del" onClick={delButton}>
          DEL
        </SpecialChar>
        <Buttons value="4" onClick={handleChange}>
          4
        </Buttons>
        <Buttons value="5" onClick={handleChange}>
          5
        </Buttons>
        <Buttons value="6" onClick={handleChange}>
          6
        </Buttons>
        <Buttons value="+" onClick={handleOperation}>
          +
        </Buttons>
        <Buttons value="1" onClick={handleChange}>
          1
        </Buttons>
        <Buttons value="2" onClick={handleChange}>
          2
        </Buttons>
        <Buttons value="3" onClick={handleChange}>
          3
        </Buttons>
        <Buttons value="-" onClick={handleOperation}>
          -
        </Buttons>
        <Buttons value="." onClick={handleChange}>
          .
        </Buttons>
        <Buttons value="0" onClick={handleChange}>
          0
        </Buttons>
        <Buttons value="/" onClick={handleOperation}>
          /
        </Buttons>
        <Buttons value="*" onClick={handleOperation}>
          x
        </Buttons>
        <LastSpecialChar value="reset" onClick={reset}>
          RESET
        </LastSpecialChar>
        <LastSpecialChar value="=" onClick={equal}>
          =
        </LastSpecialChar>
      </StyledButtons>
    </>
  );
};

export default Inputs;
