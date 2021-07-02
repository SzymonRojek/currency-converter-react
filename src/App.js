import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StatusRender } from './components/StatusRender';

export const App = () => (
  <Container>
    <Header title="Currency Converter" />
    <StatusRender />
    <Footer>
    © 2021 | Coded by Szymon Rojek 
    </Footer>
  </Container>
);