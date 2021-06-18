import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 3px;
  border: none;
  color: rgba(255, 255, 255, 0.79);
  background-color: #4d5061c1;
  letter-spacing: 1px;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all .3s ease-in-out;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus {
    border: 2px solid #186889;
  }

  &:active {
    background-color: #3b3c47;
    transform: translateY(3px);
  }

  &:disabled {
    background-color: #aeb0ba;
    cursor: not-allowed;
  }
`;