import { InformationBox, StyledText } from './styled';

export const Result = ({ result, getTargetId }) => (
  <InformationBox>
    <StyledText> 
      cash in: {result?.amount} {result.id}
    </StyledText>
    <StyledText> 
      cash out: {result.value ? result.value.toFixed(2) : ""} {result.value ? getTargetId : ""}
    </StyledText>
  </InformationBox>
);