import { useCurrentDate } from './useCurrentDate';
import { Wrapper, TextDate } from './styled';

export const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = date.toLocaleString(undefined, {
    weekday : "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  return (
    <Wrapper>
      <TextDate>
        {formattedDate}
      </TextDate>
    </Wrapper>
  );
};