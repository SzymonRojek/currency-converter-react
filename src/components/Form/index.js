import { useState, useRef } from 'react';
import { Result } from './Result';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button'; 
import { Clock } from './Clock';
import { useApiRates } from "../../useApiRates";

import {
  Fieldset,
  InformationLoader,
  CircleLoading,
  StyledParagraph,
  List,
  StyledSpan,
  Item,
  UpdateText
} from './styled';

export const Form = () => {
  const [amount, setAmount] = useState();
  const [currencyFrom, setCurrencyFrom] = useState("GBP");
  const [currencyTo, setCurrencyTo] = useState("PLN");
  const [result, setResult] = useState({});

  const ratesData = useApiRates();

  const calculateResult = (currencyFrom, currencyTo, amount) => {
    const rate = ratesData.rates[currencyFrom];
    const sourceRate = ratesData.rates[currencyTo];

    setResult({
      amount,
      calculatedAmount: +amount * sourceRate / rate,
      currencyFrom,
      currencyTo,
    });
  };

  const inputTypedAmount = useRef();
  
  const clearInput = () => inputTypedAmount.current.value = "";

  const onFormSubmit = event => {
    event.preventDefault();
  
    calculateResult(currencyFrom, currencyTo, amount);
    clearInput();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Fieldset>
        {ratesData.state === "loading..." ? (
          <InformationLoader>
            <CircleLoading />
            Loading data...😄
          </InformationLoader>
        ) : ratesData.state === "error" ? (
          <InformationLoader>
            No Internet.
            Try: Checking the network cables, modem and router
            Reconnecting to Wi-Fi
          </InformationLoader>
        ) : (
        <>
          <StyledParagraph>*fields required</StyledParagraph>
          <Clock />
            <List>
              <Item>
                <label>
                  <StyledSpan>Currency from*:</StyledSpan>
                  <Select
                    rates={ratesData.rates}
                    value={currencyFrom} 
                    onChange={setCurrencyFrom} 
                  />
                </label>
              </Item>
              <Item secondItem>
                <label>
                  <StyledSpan>Currency to*:</StyledSpan>
                  <Select 
                    rates={ratesData.rates}
                    value={currencyTo} 
                    onChange={setCurrencyTo} 
                  />
                </label>
              </Item>
              <Item>
                <Input 
                  setAmount={setAmount}
                  inputTypedAmount={inputTypedAmount}
                  currencyFrom={currencyFrom}
                />
              </Item>
              <Item lastItem>
                <Result 
                  result={result} 
                />
                
              </Item>
            </List>
            <Button title="count amount" />
            <UpdateText>Last update {ratesData.date}</UpdateText>
          </>
        )}
      </Fieldset>
    </form>
  ); 
};