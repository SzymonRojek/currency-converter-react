import { useState, useRef } from 'react';
import { Result } from './Result';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button'; 
import { Clock } from './Clock';
import { currencies } from '../../currencies';

import {
  Fieldset,
  StyledParagraph,
  List,
  StyledSpan,
  Item
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
      <Fieldset>
        <StyledParagraph>*fields required</StyledParagraph>
        <Clock />
          <List>
            <Item>
              <label>
                <StyledSpan>Currency from*:</StyledSpan>
                <Select 
                  currencies={currencies}
                  value={currencyFrom} 
                  onChange={setCurrencyFrom} 
                />
              </label>
            </Item>
            <Item secondItem>
              <label>
                <StyledSpan>Currency to*:</StyledSpan>
                <Select 
                  currencies={currencies}
                  value={currencyTo} 
                  onChange={setCurrencyTo} 
                />
              </label>
            </Item>
            <Item>
              <Input 
                setAmount={setAmount}
                inputTypedAmount={inputTypedAmount}
                getIdCurrencyFrom={getIdCurrencyFrom}
              />
            </Item>
            <Item lastItem>
              <Result 
                result={result} 
              />
            </Item>
          </List>
          <Button title="count amount" />
      </Fieldset>
    </form>
  ); 
};