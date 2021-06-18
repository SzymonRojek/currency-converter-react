import {
  SelectWrapper,
  StyledSelect,
  StyledArrow,
} from './styled';

export const Select = ({ currencies, value, onChange }) => (
  <SelectWrapper>
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
    <span></span>
    <StyledArrow />
  </SelectWrapper>
);