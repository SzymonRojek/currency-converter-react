import {
  Container,
  Face,
  Eye,
  Mouth,
  Shadow,
} from './styled';

export const EmojiAnimation = () => (
  <>
    <Container>
      <Face>
        <Eye left />
        <Eye right />
        <Mouth />
      </Face>
      <Shadow />
    </Container>
  </>
);