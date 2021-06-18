import styled from 'styled-components';

export const Label = styled.label`
margin-top: 120px;
`;

export const StyledText = styled.p`
  display: inline-block;
  padding: 8px;
  margin-bottom: 5px;
  font-size: 15px;
  color: #186889;
  letter-spacing: 1px;
  word-spacing: 3px;
  background-color: #9ac0d8d7;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`  
  padding: 8px 30px 8px 10px;
  font-size: 16px;
  letter-spacing: 2px;
  background-color: #4d5061c1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .5);
  border: none;
  border-radius: 3px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  outline: none;
  min-height: 35px;
  width: 100%;
  color: rgba(255, 255, 255, 0.79);

  &::placeholder {
    color: rgba(255, 255, 255, 0.79);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus + span {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid #186889;
    border-radius: 4px;
    pointer-events: none;
    z-index: 1;
  }
`;