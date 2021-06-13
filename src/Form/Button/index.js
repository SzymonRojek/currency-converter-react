import './style.css';

export const Button = ({ title, disabled }) => (
  <div className="form__footer">
    <button className="form__button" disabled={disabled}>{title}</button>
  </div>
);
