import { useState, useRef } from 'react';
import { Result } from './Result';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button'; 
import { Clock } from './Clock';
import { currencies } from '../../currencies';

import {
  StyledFieldset,
  StyledParagraph,
  StyledList,
  StyledText,
  StyledWrapperSelect
} from './styled';

export const Form = () => {
  const [amount, setAmount] = useState();
  const [currencyFrom, setCurrencyFrom] = useState(currencies[1].name);
  const [currencyTo, setCurrencyTo] = useState(currencies[16].name);
  const [result, setResult] = useState({});

  const getCurrenciesToExchange = currencies.find( ({ name }) => name === currencyFrom).exchange;

  const getIdCurrencyFrom = currencies.find( ({ name }) => name === currencyFrom).id;

  const getTargetId = currencies.find( ({ name }) => name === currencyTo).id;
  
  const getTargetRate = getCurrenciesToExchange.find( ({ id }) => id === getTargetId).rate;

  const calculateResult = () => {
    setResult({
      amount,
      calculatedAmount: +amount * getTargetRate, 
      getIdCurrencyFrom,
      getTargetId,
    });
  };

  const inputTypedAmount = useRef();
  
  const clearInput = () => inputTypedAmount.current.value = "";

  const onFormSubmit = event => {
    event.preventDefault();
  
    calculateResult(amount, getTargetRate, getIdCurrencyFrom, getTargetId);
    clearInput();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <StyledFieldset>
        <StyledParagraph>*fields required</StyledParagraph>
        <Clock />
          <StyledList>
            <StyledWrapperSelect>
              <label>
                <StyledText>Currency from*:</StyledText>
                <Select 
                  currencies={currencies}
                  value={currencyFrom} 
                  onChange={setCurrencyFrom} 
                />
              </label>
            </StyledWrapperSelect>
            <StyledWrapperSelect margin="30px 0 30px">
              <label>
                <StyledText>Currency to*:</StyledText>
                <Select 
                  currencies={currencies}
                  value={currencyTo} 
                  onChange={setCurrencyTo} 
                />
              </label>
            </StyledWrapperSelect>
            <li>
              <Input 
                setAmount={setAmount}
                inputTypedAmount={inputTypedAmount}
                getIdCurrencyFrom={getIdCurrencyFrom}
              />
            </li>
            <Result 
              result={result} 
            />
          </StyledList>
          <Button title="count amount" />
      </StyledFieldset>
    </form>
  ); 
};