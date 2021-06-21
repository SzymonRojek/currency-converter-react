import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Form } from './components/Form';

export const App = () => (
  <Container>
    <Header title="Currency Converter" />
    <Form />
    <Footer title="© 2021 | Coded by Szymon Rojek" />
  </Container>
);
