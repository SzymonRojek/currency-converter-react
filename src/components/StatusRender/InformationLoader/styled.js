import styled, { keyframes } from 'styled-components';
import { ErrorText } from '../ErrorBox/styled';

export const InformationLoader = styled.div` 
  width: 100%;
  min-height: 500px;
  padding: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const rotate = keyframes` 
  from {
    transform: none;
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingCircle = styled.div` 
  width: 40px;
  height: 40px;
  margin: 50px auto;
  border: solid 4px ${({ theme }) => theme.accent.border};
  border-top: solid 5px ${({ theme }) => theme.accent.borderTop};
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

export const LoadingText = styled(ErrorText)``;