import './style.css';

export const Result = ({ result }) => (
  <div>
    <p className="form__text"> 
      cash in: {result ? result.amount : ""} 
    </p>
    <p className="form__text"> 
      cash out: {result ? result.value : "" } 
    </p>
  </div>
);
