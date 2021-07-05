import { useState, useEffect } from "react";

export const useApiRates = () => {
  let [ratesData, setRatesData] = useState({
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

        if (!rates) {
         throw new Error(console.error(`rates are undefined or null`));
        }

        setRatesData({ date, rates, status: "success" });
        
      } catch (error) {
        setRatesData({ status: "error"});
      }
    };
  
      setTimeout(fetchData, 1_000);
  }, []);
  
  return ratesData;
};