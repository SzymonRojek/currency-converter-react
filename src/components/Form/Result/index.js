import { InformationBox, StyledText } from './styled';

export const Result = ({ result }) => (
  <InformationBox>
    <StyledText> 
      cash in: {result?.amount} 
    </StyledText>
    <StyledText> 
      cash out: {result.value ? result.value.toFixed(2) : ""} 
    </StyledText>
  </InformationBox>
);