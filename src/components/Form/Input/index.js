import { 
  Label, 
  TextAmount, 
  Wrapper, 
  StyledInput,
} from './styled';

export const Input = ({ amount, setAmount, inputTypedAmount, currencyFrom }) => (
  <Label>
    <TextAmount>
      Amount in {currencyFrom}*:
    </TextAmount>
    <Wrapper>
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
        as="input"
      />
    </Wrapper>
  </Label>
);