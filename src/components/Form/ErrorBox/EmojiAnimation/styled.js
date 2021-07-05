import styled, { css, keyframes } from 'styled-components';

const face = keyframes` 
  0% {
    transform: none;
    left: 25%;
  }
  50% {
    transform: rotate(168deg);
    left: 60%;
  }
  100% {
    transform: none;
    left: 25%;
  }
`;

const shadow = keyframes`
  0% {
    left: 25%;
  }
  50% {
    left: 60%;
  }
  100% {
    left: 25%;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: transparent;
`;

export const Face = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 50%;
  left: 20%;
  border-radius: 70%;
  border: 1px solid ${({ theme }) => theme.accent.border};
  animation: ${face} 3s alternate infinite ease-in-out;
`;

export const Eye = styled.div`
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundColor.eye};
  top: 42%;
  
  ${({ left }) => left && css`
    left: 20%;
  `}

  ${({ right }) => right && css`
    right: 20%;
  `}
`;

export const Mouth = styled.div`
  position: absolute;
  top: 60%;
  left: 35%;
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.accent.border} transparent transparent ${({ theme }) => theme.accent.border};
  transform: rotate(45deg);
`;

export const Shadow = styled.div`
  position: absolute;
  bottom: 45px;
  left: 20%;
  width: 70px;
  height: 10px;
  background-color: black;
  border-radius: 50%;
  opacity: 0.2;
  animation: ${shadow} 3s alternate infinite ease-in-out;
`;