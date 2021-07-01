import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.button.backgroundColor};
  box-shadow: 0 10px 20px ${({ theme }) => theme.accent.darkShadow};
  letter-spacing: 1px;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
  }

  &:active {
    background-color: ${({ theme }) => theme.button.active};
    transform: translateY(3px);
  }
`;