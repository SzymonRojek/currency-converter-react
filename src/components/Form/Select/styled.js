import styled from 'styled-components';
import { baseFormControlStyles } from '../Input/styled';

export const Wrapper = styled.div`
   position: relative;
`;

export let StyledSelect = styled.select`
  ${baseFormControlStyles}
  cursor: pointer; 
`;

const size = "5px";

export const StyledArrow = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 2rem;
  background-color: ${({ theme }) => theme.accent.boxArrow};
  pointer-events: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  &::before,
  &::after {
    ${size};
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    border-left: ${size} solid transparent;
    border-right: ${size} solid transparent;
    border-top: ${size} solid ${({ theme }) => theme.accent.arrow};
  }
`;