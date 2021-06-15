import './style.css';

export const Button = ({ title }) => (
  <div className="form__footer">
    <button className="form__button"> 
      {title}
    </button>
  </div>
);
