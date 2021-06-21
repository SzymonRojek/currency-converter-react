import { TextResult } from './styled';

export const Result = ({ result }) => (
  <>
    <TextResult> 
      cash in: {result?.amount} {result.getIdCurrencyFrom}
    </TextResult>
    <TextResult> 
      cash out: {result.calculatedAmount ? result.calculatedAmount.toFixed(2) : ""} {result.getTargetId}
    </TextResult>
  </>
);