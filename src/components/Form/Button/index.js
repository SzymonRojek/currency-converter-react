import { Wrapper, StyledButton } from './styled';

export const Button = ({ title }) => (
  <Wrapper>
    <StyledButton> 
      {title}
    </StyledButton>
  </Wrapper>
);
