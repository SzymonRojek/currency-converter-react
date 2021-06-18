import { ButtonWrapper, StyledButton } from './styled';

export const Button = ({ title }) => (
  <ButtonWrapper>
    <StyledButton> 
      {title}
    </StyledButton>
  </ButtonWrapper>
);
