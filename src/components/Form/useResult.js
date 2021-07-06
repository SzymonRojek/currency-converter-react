import { useState } from "react";

export const useResult = () => {
  const [amount, setAmount] = useState();
  const [currencyFrom, setCurrencyFrom] = useState("GBP");
  const [currencyTo, setCurrencyTo] = useState("PLN");
  const [result, setResult] = useState({});

  const calculateResult = rates => {
    const rate = rates[currencyFrom];
    const sourceRate = rates[currencyTo];

    setResult({
      amount,
      calculatedAmount: +amount * sourceRate / rate,
      currencyFrom,
      currencyTo,
    });
  };

  return {
    amount,
    setAmount,
    currencyFrom,
    setCurrencyFrom,
    currencyTo,
    setCurrencyTo,
    result,
    setResult,
    calculateResult,
  };
};