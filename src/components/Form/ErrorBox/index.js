import { ErrorText } from './styled';
import { EmojiAnimation } from './EmojiAnimation/';

export const ErrorBox = () => (
  <>
    <EmojiAnimation />
    <ErrorText>
      Something went wrong. 
      Please check your internet connection and try again later.
    </ErrorText>
  </>
);