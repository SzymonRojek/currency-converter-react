import './App.css';
import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Container>
      <Header title="Currency Converter" />
      <Footer text="© 2021 | Coded by Szymon Rojek" />
    </Container>
  );
}

export default App;
