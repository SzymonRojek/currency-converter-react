import './style.css';
import { useState } from 'react';
import Result from '../Result';
import Input from './Input';
import Select from './Select';
import Button from './Button';

const Form = ({ currencies }) => {
  const [amount, setAmount] = useState("");

  const [currencyFrom, setCurrencyFrom] = useState("🇵🇱 Polish Zloty");

  const [currencyTo, setCurrencyTo] = useState("🇬🇧 British Pound");

  const currenciesToExchange = currencies.find( ({ name }) => name === currencyFrom);

  const [result, setResult] = useState();

  const getIdCurrencyFrom = currencies.find( ({ name }) => name === currencyFrom).id;

  const onFormSubmit = event => {
    event.preventDefault();
  
    const getRateCurrencyTo = currenciesToExchange.exchangeTo.find( ({ name }) => name === currencyTo).rate;
    const getIdCurrencyTo = currenciesToExchange.exchangeTo.find( ({ name }) => name === currencyTo).id;

    const calculateResult = (amount, rate) => +amount * rate;
    let result = calculateResult(amount, getRateCurrencyTo);
    setResult({ value: result, id: getIdCurrencyTo });
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
                getIdCurrencyFrom={getIdCurrencyFrom}
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
            currencyFrom={currencyFrom}
            currencyTo={currencyTo}
            title="count amount"
          />
      </fieldset>
    </form>
  ); 
};

export default Form