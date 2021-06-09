import "./style.css";

const Form = () => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <p className="form__paragraph">*fields required</p>
          <ul className="form__list">
            <li>
              <label>
                <span className="form__labelText">
                  Currency from*:
                </span>
                <div className="form__selectVisual">
                  <select className="form__selectVisual-select" name="currencyHave">
                    <option value="search"></option>
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
                  <select className="form__selectVisual-select" name="currencyExchange">
                    <option value="search"></option>
                  </select>
                  <span className="focus"></span>
                  <span className="form__selectVisual form__selectVisual--arrow"></span>
                </div>
              </label>
            </li>
            <li>
              <label className="form__label">
                <span className="form__labelText form__labelText--last">
                  Amount<strong className="js-labelText--last"></strong>*:
                </span>
                <div className="form__amountVisual">
                  <input 
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