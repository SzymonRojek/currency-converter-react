import { InformationBox, StyledText } from './styled';

export const Result = ({ result }) => (
  <InformationBox>
    <StyledText> 
      cash in: {result ? result.amount : ""} 
    </StyledText>
    <StyledText> 
      cash out: {result ? result.value : "" } 
    </StyledText>
  </InformationBox>
);