import './style.css';

const Button = ({ title, disabled }) => {

  return (
    <div className="form__footer">
      <button className="form__button" disabled={disabled}>{title}</button>
    </div>
  );
}
export default Button