import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 50px 0 25px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  border-radius: 3px;
`;

export const TextDate = styled.p`
 padding: 8px 0 8px 0;
  font-size: 20px;
  color: ${({ theme }) => theme.color.secondary};
  line-height: 1.8;
  letter-spacing: 3px;
  word-spacing: 2px;
`;