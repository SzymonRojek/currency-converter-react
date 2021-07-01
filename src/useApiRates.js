import { useState, useEffect } from "react";

export const useApiRates = url => {
  const [ratesData, setRatesData] = useState({
    state: "loading...",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const parsedData = await response.json();
        setRatesData({
          data: parsedData.date,
          rates: parsedData.rates,
        });

      } catch (error) {
        setRatesData({ state: "error"});
      }
    };
    setTimeout(fetchData, 1 * 1_000);

    return () => {
      setRatesData({
        state: "loading...",
      });
    };

  },[url]);
  
  return ratesData;
};