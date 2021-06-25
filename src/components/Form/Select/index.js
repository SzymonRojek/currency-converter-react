import {
  Wrapper,
  StyledSelect,
  StyledArrow,
} from './styled';

export const Select = ({ currencies, value, onChange }) => (
  <Wrapper>
    <StyledSelect 
      value={value}
      onChange={({ target }) => onChange(target.value)}
    >
      {currencies.map(currency => 
        (
          <option key={currency.id}>
            {currency.name}
          </option>
        ))
      }
    </StyledSelect>
    <StyledArrow />
  </Wrapper>
);