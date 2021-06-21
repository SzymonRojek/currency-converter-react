import styled, { css } from 'styled-components';

export const StyledFieldset = styled.fieldset`
  box-shadow: 6px 6px 19px 0px rgba(47, 50, 50, 0.54);
  border-radius: 5px;
  border: none;
  background-image: url('https://www.researchgate.net/profile/M-Basri/publication/320925728/figure/fig3/AS:631619933192230@1527601335529/India-GDP-Growth-Interest-Rate-Forex-Reserves-Exchange-Rates-and-Current-Account.png');
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 30;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #cfdde3c1;
    border-radius: 5px;
    position: absolute;
    z-index: -10;
  }
`;

export const StyledParagraph = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  letter-spacing: 3px;
  word-spacing: 2px;
  color: #186889;
  background-color: #9ac0d8d7;
  max-width: 150px;
  padding: 5px;
`;

export const StyledWrapperSelect = styled.li`
  ${ ({ middle }) => middle && css`
    margin: 30px 0 30px;
  `};
`;

export const StyledList = styled.ul`
  padding: 10px;
  list-style: none;
`;

export const StyledText = styled.span`
  display: inline-block;
  padding: 8px;
  margin-bottom: 5px;
  font-size: 15px;
  color: #186889;
  letter-spacing: 1px;
  word-spacing: 3px;
  background-color: #9ac0d8d7;
`;