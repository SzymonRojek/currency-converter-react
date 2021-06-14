import './style.css';
import { useState, useRef } from 'react';
import { Result } from '../Result';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button'; 
import { DateUpdate } from './Date';

export const Form = ({ currencies, result, calculateResult }) => {
  const [currencyFrom, setCurrencyFrom] = useState("🔍 search");
  const [currencyTo, setCurrencyTo] = useState("🔍 search");
  const [amount, setAmount] = useState();

  const currenciesToExchange = currencies.find( ({ name }) => name === currencyFrom);
  const getIdCurrencyFrom = currencies.find( ({ name }) => name === currencyFrom).id;

  const inputTypedAmount = useRef();

  const clearInput = () => {
   inputTypedAmount.current.value = "";
  };

  const onFormSubmit = event => {
    event.preventDefault();
  
    const getRateCurrencyTo = currenciesToExchange.exchangeTo.find( ({ name }) => name === currencyTo).rate;
    const getIdCurrencyTo = currenciesToExchange.exchangeTo.find( ({ name }) => name === currencyTo).id;
    
    calculateResult(amount, getRateCurrencyTo, getIdCurrencyTo);
    clearInput();
  };

  return (
    <form 
      onSubmit={onFormSubmit}
      className="form">
      <fieldset className="form__fieldset">
        <p className="form__paragraph">*fields required</p>
        <DateUpdate />
          <ul className="form__list">
            <li>
              <label>
                <span className="form__labelText">
                  Currency from*: 
                </span>
                <Select 
                  currencies={currencies}
                  value={currencyFrom} 
                  onChange={setCurrencyFrom} 
                />
              </label>
            </li>
            <li>
              <label>
                <span className="form__labelText form__labelText--middle">
                  Currency to*:
                </span>
                <div className="form__selectVisual">
                <Select 
                  currencies={currencies}
                  value={currencyTo} 
                  onChange={setCurrencyTo} 
                />
                  <span className="focus"></span>
                  <span className="form__selectVisual form__selectVisual--arrow"></span>
                </div>
              </label>
            </li>
            <li>
              <Input 
                inputTypedAmount={inputTypedAmount}
                setAmount={setAmount}
                getIdCurrencyFrom={getIdCurrencyFrom}
              />
            </li>
            <li className="form__information">
              <Result 
                amount={amount}
                result={result}
                getIdCurrencyFrom={getIdCurrencyFrom}
              />
            </li>
          </ul>
          <Button 
            disabled={currencyFrom === currencyTo || currencyFrom === "🔍 search" || currencyTo === "🔍 search"}
            title="count amount"
          />
      </fieldset>
    </form>
  ); 
};