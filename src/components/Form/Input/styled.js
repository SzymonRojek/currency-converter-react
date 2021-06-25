import styled, { css } from 'styled-components';

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
  background-color: ${({ theme }) => theme.backgroundColor.secondary100};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const baseFormControlStyles = css`
  padding: 8px 30px 8px 10px;
  font-size: 16px;
  letter-spacing: 2px;
  background-color: ${({ theme }) => theme.backgroundColor.secondary200};
  box-shadow: 0 10px 20px ${({ theme }) => theme.accent.shadow200};
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
`;

export const StyledInput = styled.input`  
  ${baseFormControlStyles};
 
  &::placeholder {
    color: ${({ theme }) => theme.color.primary};
  }
`;