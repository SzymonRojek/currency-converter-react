import "./style.css";

const Result = ({ result, currencyFrom, currencyTo }) => {
  let step = 'choose yours currencies';

  if(currencyFrom === currencyTo) {
    step = 'choosen same currencies';
  }
  
  return (
    <div>
      <p className="form__text">{!result || currencyFrom === currencyTo ? step : result.id}</p>
      <p className="form__text">{result ? result.value.toFixed(2) : ""} </p>
    </div>
  );
};

export default Result;