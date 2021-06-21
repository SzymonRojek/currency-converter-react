import { StyledHeader, StyledHeading } from './styled';

export const Header = ({ title }) => (
  <StyledHeader>
    <StyledHeading>
      {title}
    </StyledHeading>
  </StyledHeader>
);