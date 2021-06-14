import './style.css';
import { useState, useEffect } from 'react';

export const DateUpdate = () => {
  const [seconds, setSeconds] = useState(0);
  const newDate = new Date();
  const structureDate = newDate.toLocaleDateString("en-en", {
    weekday : "long",
    day: "numeric",
    month: "long",
  });

   useEffect(() => {
     let interval = null;

     interval = setInterval(() => {
       setSeconds(seconds => seconds + 1)
     }, 1000);
     
     return () => clearInterval(interval);
   },[seconds]);

  return (
    <div className="form__footer">
      <p className="form__date">
        Today is {structureDate}, {newDate.toLocaleTimeString()}
      </p>
    </div>
  );
};
