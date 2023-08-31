import React from "react";
import Header from "../components/Header";
import { Container } from "../styles/Calculator.styles";
import Inputs from "../components/Inputs";

const Calculator = () => {
  return (
    <>
      <Header />
      <section>
        <Container>
          <Inputs />
        </Container>
      </section>
    </>
  );
};

export default Calculator;
