import { useRef } from 'react';
import { Result } from './Result';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button'; 
import { Clock } from './Clock';
import { Loader } from './Loader';
import { ErrorBox } from './ErrorBox';
import { useApiRates } from '../../useApiRates';
import { useResult } from './useResult';

import {
  Fieldset,
  StyledParagraph,
  List,
  StyledSpan,
  Item,
  UpdateDate,
} from './styled';

export const Form = () => {
  const { date, rates, status } = useApiRates();
  
  const {
    setAmount,
    currencyFrom,
    setCurrencyFrom,
    currencyTo,
    setCurrencyTo,
    result,
    calculateResult,
  } = useResult();

  const inputTypedAmount = useRef();
  
  const clearInput = () => inputTypedAmount.current.value = "";

  const onFormSubmit = event => {
    event.preventDefault();
    calculateResult(rates);
    clearInput();
  };

  switch (status) {
    case "loading":
      return <Loader />;
    case "error":
      return <ErrorBox />
    case "success":
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
                    rates={rates}
                    value={currencyFrom} 
                    onChange={setCurrencyFrom} 
                  />
                </label>
              </Item>
              <Item secondItem>
                <label>
                  <StyledSpan>Currency to*:</StyledSpan>
                  <Select 
                    rates={rates}
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
                <Result result={result} />
              </Item>
            </List>
            <Button title="count amount" />
            <UpdateDate>Last update: {date}</UpdateDate>
          </Fieldset>
        </form>
    );
    default:
      throw new Error(`incorrect status: ${status}`);
  };
};