import './style.css';

const Select = ({ currencies, value, onChange }) => (
  <div className="form__selectVisual">
    <select 
      value={value}
      onChange={({ target }) => onChange(target.value)}
      className="form__selectVisual-select"
    >
      {currencies.map(currency => 
        (
          <option key={currency.id}>
            {currency.name}
          </option>
        ))
      }
    </select>
    <span className="focus"></span>
    <span className="form__selectVisual form__selectVisual--arrow"></span>
  </div>
);


export default Select;
       