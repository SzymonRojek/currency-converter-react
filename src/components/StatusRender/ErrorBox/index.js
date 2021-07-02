import {
  SorryIcon,
  LoadingText,
} from './styled';

export const ErrorBox = () => (
  <>
    <SorryIcon />
    <LoadingText>
      Something went wrong. 
      Please check your internet connection and try again later.
    </LoadingText>
  </>
);