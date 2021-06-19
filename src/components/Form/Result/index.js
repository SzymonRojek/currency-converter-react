import { InformationBox, StyledText } from './styled';

export const Result = ({ result }) => (
  <InformationBox>
    <StyledText> 
      cash in: {result?.amount} {result.getIdCurrencyFrom}
    </StyledText>
    <StyledText> 
      cash out: {result.calculatedAmount ? result.calculatedAmount.toFixed(2) : ""} {result.getTargetId}
    </StyledText>
  </InformationBox>
);