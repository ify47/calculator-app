import * as math from "mathjs";
import { useEffect, useState } from "react";

const useCalcHook = () => {
  const [operation, setOperation] = useState("");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");

  const formatNumberWithCommas = (number) => {
    // Split the number into parts before and after the decimal point
    const parts = number.toString().split(".");

    // Format the part before the decimal point with commas
    const formattedIntegerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Combine the integer part with the decimal part (if it exists)
    if (parts.length === 2) {
      return formattedIntegerPart + "." + parts[1];
    } else {
      return formattedIntegerPart;
    }
  };
  //for equal localestring
  const removeCommas = (str) => {
    return str.replace(/,/g, "");
  };

  const handleChange = (e) => {
    if (operation === "") {
      setFirstNum((prevFirstNum) =>
        handleDecimalsOnValue(prevFirstNum + e.target.value)
      );
    } else if (firstNum !== "" && operation !== "") {
      setSecondNum((prevSecondNum) =>
        handleDecimalsOnValue(prevSecondNum + e.target.value)
      );
    }
  };

  const handleOperation = (e) => {
    if (firstNum !== "") {
      setOperation(e.target.value);
    }
    if (operation === e.target.value && secondNum === "") return;
    // checks if secondnum is not empty and checks if operation contains one of the equation -> use of .test
    if (secondNum !== "" && /[+\-*/]/.test(operation)) {
      setFirstNum(math.evaluate(firstNum + operation + secondNum));
      setOperation(e.target.value);
      setSecondNum("");
    }
  };

  function handleDecimalsOnValue(value) {
    // Replace dot at the beginning with "0."
    if (value.startsWith(".")) {
      value = "0" + value;
    }
    // Replace leading zero(s) before digits
    const valueWithoutLeadingZeros = value.replace(/^0+(?=\d)/, "");

    // Ensure only one dot or comma is present
    const valueWithSingleDot = valueWithoutLeadingZeros.replace(
      /[.,]/g,
      (match) => {
        return match === "," ? "." : match;
      }
    );

    // Ensure maximum of one digit after the dot
    const regex = /^(\d*\.?\d{0,7})/;
    const matchedValue = valueWithSingleDot.match(regex);

    return matchedValue ? matchedValue[0] : "";
  }

  const delButton = () => {
    if (secondNum !== "") {
      setSecondNum(secondNum.slice(0, -1));
    } else if (operation !== "") {
      setOperation("");
    } else if (firstNum !== "") {
      setFirstNum(firstNum.toString().slice(0, -1));
    } else return;
  };

  const reset = () => {
    setFirstNum("");
    setOperation("");
    setSecondNum("");
  };

  const equal = () => {
    if (secondNum === "") return;
    try {
      const results = math.evaluate(firstNum + operation + secondNum);
      const formattedResult = results.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 6, // Adjust the number of decimal places as needed
      });

      const final = removeCommas(formattedResult);
      setFirstNum(final);
      setOperation("");
      setSecondNum("");
    } catch (error) {
      setFirstNum("error");
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key;

    if (/[0-9.]/.test(key)) {
      handleChange({ target: { value: key } });
    } else if (/[+\-*/]/.test(key)) {
      handleOperation({ target: { value: key } });
    } else if (key === "Delete" || key === "Backspace") {
      delButton();
    } else if (key === "=" || key === "Enter") {
      equal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const calculationDisplay = `${formatNumberWithCommas(
    firstNum
  )}${operation}${formatNumberWithCommas(secondNum)}`;

  return {
    handleChange,
    handleOperation,
    delButton,
    reset,
    equal,
    calculationDisplay,
  };
};
export default useCalcHook;
