import styled from 'styled-components';

export const SelectWrapper = styled.div`
   position: relative;
`;

export const StyledSelect = styled.select`
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
  display: inline-block;
  min-height: 35px;
  width: 100%;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;

  &:focus + span {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid ${({ theme }) => theme.color.secondary};
    border-radius: 4px;
    pointer-events: none;
    z-index: 1;
  }

  @media (min-width: ${({theme}) =>theme.breakpoint.tablet}px) {
    padding: 15px;
    font-size: 18px;
  }
`;

export const StyledArrow = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 2rem;
  background-color: ${({ theme }) => theme.accent.backgroundColor};
  pointer-events: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  &::before,
  &::after {
    --size: 5px;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    border-left: var(--size) solid transparent;
    border-right: var(--size) solid transparent;
    border-top: var(--size) solid ${({ theme }) => theme.accent.arrow};
  }
`;