import { StyledHeading } from './styled';

export const Header = ({ title }) => (
  <header>
    <StyledHeading>
      {title}
    </StyledHeading>
  </header>
);