import { TextResult } from './styled';

export const Result = ({ result }) => (
  <>
    <TextResult> 
      cash in: {result?.amount} {result.currencyFrom}
    </TextResult>
    <TextResult> 
      cash out: {result.calculatedAmount ? result.calculatedAmount.toFixed(2) : ""} {result.currencyTo}
    </TextResult>
  </>
);