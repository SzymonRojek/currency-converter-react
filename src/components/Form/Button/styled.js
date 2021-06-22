import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.backgroundColor.secondary200};
  box-shadow: 0 10px 20px ${({ theme }) => theme.accent.shadow200};
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
    background-color: ${({ theme }) => theme.backgroundColor.accent};
    transform: translateY(3px);
  }
`;