import { useState, useRef } from 'react';
import { Result } from './Result';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button'; 
import { Clock } from './Clock';
import {
  StyledFieldset,
  StyledParagraph,
  StyledList,
  StyledText,
  StyledWrapperSelect
} from './styled';

export const Form = ({ currencies, result, calculateResult }) => {
  const [amount, setAmount] = useState();
  const [currencyFrom, setCurrencyFrom] = useState(currencies[1].name);
  const [currencyTo, setCurrencyTo] = useState(currencies[16].name);

  const getCurrenciesToExchange = currencies.find( ({ name }) => name === currencyFrom).exchange;

  const getIdCurrencyFrom = currencies.find( ({ name }) => name === currencyFrom).id;

  const getTargetId = currencies.find( ({ name }) => name === currencyTo).id;
  
  const getTargetRate = getCurrenciesToExchange.find( ({ id }) => id === getTargetId).rate;

  const inputTypedAmount = useRef();
  
  const clearInput = () => {
   inputTypedAmount.current.value = "";
  };

  const onFormSubmit = event => {
    event.preventDefault();
  
    calculateResult(amount, getTargetRate, getIdCurrencyFrom);
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
              currencyFrom={currencyFrom}
              result={result} 
            />
          </StyledList>
          <Button title="count amount" />
      </StyledFieldset>
    </form>
  ); 
};