import './style.css';

export const Result = ({ result, currencyFrom, currencyTo }) => {
  let stepInformation = 'choose all currencies';

  if(currencyFrom === currencyTo && currencyFrom !== '🔍 search' && currencyTo !== "🔍 search") {
    stepInformation = "choosen same currencies";
  } 

  if(currencyFrom !== currencyTo && currencyTo !== "🔍 search") {
    stepInformation = "type an amount";
  }

  if(currencyFrom === "🔍 search" && currencyTo !== "🔍 search") {
    stepInformation = "choose all currencies";
  }

  const getFlagEmoji = countryCode => countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));

  return (
    <div>
      <p
        className="form__text">
        {currencyFrom !== currencyTo ? (result ? getFlagEmoji(result.id) : "") : ""} {!result || currencyFrom === currencyTo ? stepInformation : result.id}
      </p>
      <p 
        className="form__text">cash back: {result ? result.value.toFixed(2) : ""} 
      </p>
    </div>
  );
};