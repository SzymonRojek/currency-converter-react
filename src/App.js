import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <>
      <Container>
        <Header title="Currency Converter" />
        <Form />
        <Footer text="© 2021 | Coded by Szymon Rojek" />
      </Container>
    </> 
  );
}

export default App;
