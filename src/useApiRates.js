import { useState, useEffect } from "react";

export const useApiRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
    date: null,
    rates: null,
  });

  useEffect(() => {
    const apiUrl = "https://api.exchangerate.host/latest";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
      
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { date, rates } = await response.json();
        setRatesData({ date, rates, status: "success" });

      } catch (error) {
        setRatesData({ status: "error"});
      }
    };
  
      setTimeout(fetchData, 1_000);
  }, []);
  
  return ratesData;
};