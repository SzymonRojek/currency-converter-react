import {
  Wrapper,
  StyledSelect,
  StyledArrow,
} from './styled';

export const Select = ({ rates, value, onChange }) => (
  <Wrapper>
    <StyledSelect 
      value={value}
      onChange={({ target }) => onChange(target.value)}
    >
      {Object.keys(rates).map(value => 
        (
          <option key={value} value={value}>
            {value} 
          </option>
        ))
      }
    </StyledSelect>
    <StyledArrow />
  </Wrapper>
);