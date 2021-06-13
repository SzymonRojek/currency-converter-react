import './style.css';
import { useState } from 'react';
import { Result } from '../Result';
import { Input } from './Input';
import { Select } from './Select';
import { Button } from './Button';

export const Form = ({ currencies, result, calculateResult }) => {
  const [currencyFrom, setCurrencyFrom] = useState("🔍 search");
  const [currencyTo, setCurrencyTo] = useState("🔍 search");
  const [amount, setAmount] = useState("");
  
  const currenciesToExchange = currencies.find( ({ name }) => name === currencyFrom);

  const onFormSubmit = event => {
    event.preventDefault();
  
    const getRateCurrencyTo = currenciesToExchange.exchangeTo.find( ({ name }) => name === currencyTo).rate;
    const getIdCurrencyTo = currenciesToExchange.exchangeTo.find( ({ name }) => name === currencyTo).id;

    calculateResult(amount, getRateCurrencyTo, getIdCurrencyTo);
    setAmount("");
  };
 
  return (
    <form 
      onSubmit={onFormSubmit}
      className="form">
      <fieldset className="form__fieldset">
        <p className="form__paragraph">*fields required</p>
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
                amount={amount} 
                setAmount={setAmount} 
                currencyFrom={currencyFrom}
                currencies={currencies}
              />
            </li>
            <li className="form__information">
              <Result 
                result={result}
                currencyFrom={currencyFrom}
                currencyTo={currencyTo}
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