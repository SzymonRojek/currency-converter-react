import styled from 'styled-components';
import icon from '../../../images/sorry-icon.jpg';

export const SorryIcon = styled.img.attrs({
  src: `${icon}`
})`
  display: block;
  height: auto;
  width: 100%;
  max-width: 400px;
`;

export const ErrorText = styled.p`
  font-size: 25px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
`;