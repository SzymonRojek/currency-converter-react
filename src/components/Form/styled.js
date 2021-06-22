import styled, { css } from 'styled-components';

export const Fieldset = styled.fieldset`
  box-shadow: 6px 6px 19px 0px ${({ theme }) => theme.accent.shadow100};
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
    background-color: ${({ theme }) => theme.bgc.primaryOverlay};
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
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme }) => theme.bgc.secondary100};
  max-width: 150px;
  padding: 5px;
`;

export const Item = styled.li`
  ${ ({ secondItem }) => secondItem && css`
    margin: 30px 0 30px;
  `};

  ${ ({ lastItem }) => lastItem && css`
    display: flex;
    align-items: left;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
    background-color: ${({ theme }) => theme.bgc.secondary100};
  `}
`;

export const List = styled.ul`
  padding: 10px;
  list-style: none;
`;

export const StyledSpan = styled.span`
  display: inline-block;
  padding: 8px;
  margin-bottom: 5px;
  font-size: 15px;
  color: ${({ theme }) => theme.color.secondary};
  letter-spacing: 1px;
  word-spacing: 3px;
  background-color: ${({ theme }) => theme.bgc.secondary100};
`;