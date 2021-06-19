import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Form } from './components/Form';

export function App() {
  return (
    <Container>
      <Header title="Currency Converter" />
      <Form />
      <Footer title="© 2021 | Coded by Szymon Rojek" />
    </Container>
  );
};