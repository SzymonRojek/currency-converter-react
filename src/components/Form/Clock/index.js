import { useCurrentDate } from '../../../useCurrentDate';
import { Wrapper, TextDate } from './styled';

export const Clock = () => {
  const date = useCurrentDate();

  return (
    <Wrapper>
      <TextDate>
        {date}
      </TextDate>
    </Wrapper>
  );
};