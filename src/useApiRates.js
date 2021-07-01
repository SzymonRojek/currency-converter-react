import { useState, useEffect } from "react";

export const useApiRates = url => {
  const [ratesData, setRatesData] = useState({
    status: "loading...",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { date, rates } = await response.json();
        setRatesData({ date, rates });

      } catch (error) {
        setRatesData({ status: "error"});
      }
    };
    setTimeout(fetchData, 1 * 1_000);

    return () => {
      setRatesData({
        status: "loading...",
      });
    };

  },[url]);
  
  return ratesData;
};