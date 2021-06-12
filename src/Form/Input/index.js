import "./style.css";

const Input = ({ amount, getIdCurrencyFrom, setAmount }) => (
  <label className="form__label">
    <span className="form__labelText form__labelText--last">
      Amount {getIdCurrencyFrom !== "search" ? `in ${getIdCurrencyFrom}` : ""}*:
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
        required
      />
      <span className="focus"></span>
    </div>
  </label>
);

export default Input;