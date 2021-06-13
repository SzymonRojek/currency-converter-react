import './style.css';

const Button = ({currencyFrom, currencyTo, title}) => (
  <div className="form__footer">
    <button className="form__button" disabled={currencyFrom === currencyTo}>{title}</button>
  </div>
);

export default Button