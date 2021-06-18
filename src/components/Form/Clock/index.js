import { ClockBox, StyledText } from './styled';
import { useState, useEffect } from 'react';

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(0);

  const getDate = date.toLocaleDateString(undefined, {
    weekday : "long",
    day: "numeric",
    month: "long",
  });

  useEffect(() => setTime(date.toLocaleTimeString()), [date]);

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
     
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <ClockBox>
      <StyledText>
        {getDate}, {time}
      </StyledText>
    </ClockBox>
  );
};
