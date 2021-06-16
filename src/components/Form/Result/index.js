import './style.css';

export const Result = ({ result, getIdCurrencyFrom }) => {
  
  const getFlagEmoji = countryCode => 
    countryCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()));

  return (
    <div>
      <p className="form__text"> 
        cash in: {result ? result.amount : ''} {result ? getFlagEmoji(getIdCurrencyFrom) : ""}
      </p>
      <p className="form__text"> 
        cash out: {result ? result.value.toFixed(2) : "" } {result ? getFlagEmoji(result.id) : ""}
      </p>
    </div>
  );
};