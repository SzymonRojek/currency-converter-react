import "./style.css";
import { useState } from "react";
import currencies from "../currencies";
import Result from './Result';
import Input from "./Input"

const Form = () => {
  const [amount, setAmount] = useState("");

  const [currencyFrom, setCurrencyFrom] = useState("🇵🇱 Polish Zloty");

  const [currencyTo, setCurrencyTo] = useState("🇬🇧 British Pound");

  const currenciesToExchange = currencies.find( ({ fullName }) => fullName === currencyFrom);

  const [result, setResult] = useState();

  const getIdCurrencyFrom = currencies.find( ({fullName}) => fullName === currencyFrom).id;

  const calculateResult = (amount, rate) => +amount * rate;

  
  const onFormSubmit = event => {
    event.preventDefault();

    const getRateCurrencyTo = currenciesToExchange.exchangeTo.find( ({fullName}) => fullName === currencyTo).rate;
    const getIdCurrencyTo = currenciesToExchange.exchangeTo.find( ({fullName}) => fullName === currencyTo).id;

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

                <div className="form__selectVisual">
                  <select 
                  value={currencyFrom}
                  onChange={({ target }) => setCurrencyFrom(target.value)}
                  className="form__selectVisual-select"
                  >
                    {currencies.map(currency => (
                      <option key={currency.id}>
                        {currency.fullName}
                      </option>)
                    )}

                  </select>
                  <span className="focus"></span>
                  <span className="form__selectVisual form__selectVisual--arrow"></span>
                </div>
              </label>
            </li>
            <li>
              <label>
                <span className="form__labelText form__labelText--middle">
                  Currency to*:
                </span>
                <div className="form__selectVisual">
                  <select 
                    value={currencyTo}
                    onChange={({ target }) => setCurrencyTo(target.value)}
                    className="form__selectVisual-select"
                  >
                    {currencies.map(currency => (
                            <option key={currency.id}>
                              {currency.fullName}
                            </option>)
                    )}

                  </select>
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
                amount={amount}
                setAmount={setAmount}
              />
            </li>
          </ul>
          <div className="form__footer">
            <button className="form__button" disabled={currencyFrom === currencyTo}>Count Amount</button>
          </div>
      </fieldset>
    </form>
  ); 
};

export default Form;