import styled from 'styled-components';

export const ErrorText = styled.p`
  font-size: 25px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
`;