import { 
  Label, 
  StyledText, 
  InputWrapper, 
  StyledInput,
} from './styled';

export const Input = ({ amount, setAmount, inputTypedAmount, getIdCurrencyFrom }) => (
  <Label>
    <StyledText>
      Amount in {getIdCurrencyFrom}*:
    </StyledText>
    <InputWrapper>
      <StyledInput
        ref={inputTypedAmount}
        value={amount}
        onChange={({ target }) => setAmount(target.value)} 
        type="number" 
        name="amount" 
        min="0.01" 
        step="0.01" 
        placeholder="type here" 
        required
      />
      <span></span>
    </InputWrapper>
  </Label>
);
