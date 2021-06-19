import { ClockBox, StyledText } from './styled';
import { useState, useEffect } from 'react';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {setDate(new Date())}, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ClockBox>
      <StyledText>
       {date.toLocaleString(undefined, 
       {
        weekday : "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })}
      </StyledText>
    </ClockBox>
  );
};
