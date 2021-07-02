import {
  SorryIcon,
  ErrorText,
} from './styled';

export const ErrorBox = () => (
  <>
    <SorryIcon />
    <ErrorText>
      Something went wrong. 
      Please check your internet connection and try again later.
    </ErrorText>
  </>
);