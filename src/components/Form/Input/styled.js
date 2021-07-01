import styled from 'styled-components';
import { StyledSelect } from '../Select/styled'

export const Label = styled.label`
  margin-top: 120px;
`;

export const TextAmount = styled.span`
  display: inline-block;
  padding: 8px;
  margin-bottom: 5px;
  font-size: 15px;
  color: ${({ theme }) => theme.color.secondary};
  letter-spacing: 1px;
  word-spacing: 3px;
  background-color: ${({ theme }) => theme.backgroundColor.label};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled(StyledSelect)`  
  &::placeholder {
    color: ${({ theme }) => theme.color.primary};
  }
`;