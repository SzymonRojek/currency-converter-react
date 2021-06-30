import styled, { css, keyframes } from 'styled-components';

export const Fieldset = styled.fieldset`
  box-shadow: 6px 6px 19px 0px ${({ theme }) => theme.accent.greyShadow};
  border-radius: 5px;
  border: none;
  background-image: url(${({ theme }) => theme.image.url});
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
    background-color: ${({ theme }) => theme.backgroundColor.fieldsetOverlay};
    border-radius: 5px;
    position: absolute;
    z-index: -10;
  }
`;

export const StyledParagraph = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 3px;
  word-spacing: 2px;
  color: ${({ theme }) => theme.color.tertiary};
  background-color: ${({ theme }) => theme.backgroundColor.label};
  max-width: 180px;
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
    background-color: ${({ theme }) => theme.backgroundColor.label};
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
  background-color: ${({ theme }) => theme.backgroundColor.label};
`;

export const LoadingText = styled.p`
 color: ${ ({ theme }) => theme.color.tertiary};
 font-size: 15px;
 text-align: right;
`;