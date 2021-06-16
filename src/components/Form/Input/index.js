import './style.css';

export const Input = ({ amount, setAmount, inputTypedAmount, getIdCurrencyFrom }) => {

  return (
    <label className="form__label">
      <span className="form__labelText form__labelText--last">
        Amount in {getIdCurrencyFrom}*:
      </span>
      <div className="form__amountVisual">
        <input
          ref={inputTypedAmount}
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          className="form__amountVisual-input" 
          type="number" 
          name="amount" 
          min="0.01" 
          step="0.01" 
          placeholder="type here" 
          required
        />
        <span className="focus"></span>
      </div>
    </label>
  );
};