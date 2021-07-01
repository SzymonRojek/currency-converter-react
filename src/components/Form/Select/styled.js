import styled from 'styled-components';
import { baseFormControlStyles } from '../Input/styled';

export const Wrapper = styled.div`
   position: relative;
`;

export const StyledSelect = styled.select`
  padding: 8px 30px 8px 10px;
  font-size: 16px;
  letter-spacing: 2px;
  background-color: ${({ theme }) => theme.backgroundColor.field};
  box-shadow: 0 10px 20px ${({ theme }) => theme.accent.darkShadow};
  border: none;
  border-radius: 3px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  outline: none;
  min-height: 35px;
  width: 100%;
  color: ${({ theme }) => theme.color.primary};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    padding: 15px;
    font-size: 18px;
  }
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