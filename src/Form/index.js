import "./style.css";
import { useState } from "react";
import currencies from '../currencies';

const Select = () => {
  return (
    <div className="form__selectVisual">
      <select 
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
  );
};

const Form = ({ currencies }) => {
  const [amount, setAmount] = useState("");
  const onFormSubmit = event => {
    event.preventDefault();
    
  console.log(amount)
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
                <Select />
              </label>
            </li>
            <li>
              <label>
                <span className="form__labelText form__labelText--middle">
                  Currency to*:
                </span>
                <Select />
              </label>
            </li>
            <li>
              <label className="form__label">
                <span className="form__labelText form__labelText--last">
                  Amount*:
                </span>
                <div className="form__amountVisual">
                  <input 
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    className="form__amountVisual-input" 
                    type="number" 
                    name="amount" 
                    min="1" 
                    step="any" 
                    placeholder="type here" 
                  />
                  <span className="focus"></span>
                </div>
              </label>
            </li>
            <li className="form__information">
              <p className="form__text">Choose currencies</p>
            </li>
          </ul>
          <div className="form__footer">
            <button className="form__button">Count Amount</button>
          </div>
      </fieldset>
    </form>
  ); 
};

export default Form;