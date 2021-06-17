import { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { currencies } from './currencies';


export function App() {
  const [result, setResult] = useState({});

  const calculateResult = ( amount, getRateCurrencyTo, getIdCurrencyTo ) => {

    setResult({
      value: (+amount * getRateCurrencyTo).toFixed(2), 
      id: getIdCurrencyTo, 
      amount
    });
  };

  return (
    <Container>
      <Header title="Currency Converter" />
      <Form 
        currencies={currencies} 
        calculateResult={calculateResult} 
        result={result} 
      />
      <Footer title="© 2021 | Coded by Szymon Rojek" />
    </Container>
  );
};