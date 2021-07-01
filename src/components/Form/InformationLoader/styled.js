
import styled, { keyframes } from 'styled-components';

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
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CircleLoading=styled.div` width: 40px;
  height: 40px;
  margin: 50px auto;
  border: solid 4px ${({ theme }) => theme.accent.border};
  border-top: solid 5px ${({ theme }) => theme.accent.borderTop};
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

export const LoadingText = styled.p`
  font-size: 25px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.primary};
`;