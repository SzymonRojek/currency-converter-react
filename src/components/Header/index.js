import { HeadingBox, StyledHeading } from './styled';

export const Header = ({ title }) => (
  <HeadingBox>
    <StyledHeading>
      {title}
    </StyledHeading>
  </HeadingBox>
);