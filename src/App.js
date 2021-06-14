import { useState } from 'react';
import { Container } from "./Container";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { currencies } from "./currencies/currencies";

export function App() {
  const [result, setResult] = useState();
  
  const calculateResult = ( amount, getRateCurrencyTo, getIdCurrencyTo ) => {

    setResult({ 
        value: +amount * getRateCurrencyTo, 
        id: getIdCurrencyTo, 
        amount
      });
  };

  return (
    <>
      <Container>
        <Header title="Currency Converter" />
        <Form 
          currencies={currencies} 
          calculateResult={calculateResult} 
          result={result} 
        />
        <Footer title="© 2021 | Coded by Szymon Rojek" />
      </Container>
    </> 
  );
};