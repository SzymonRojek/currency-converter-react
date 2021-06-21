import { useCurrentDate } from '../../../useCurrentDate';
import { ClockBox, StyledText } from './styled';

export const Clock = () => {
  const date = useCurrentDate();

  return (
    <ClockBox>
      <StyledText>
        {date}
      </StyledText>
    </ClockBox>
  );
};