import { useState, useEffect } from "react";

export const useApiRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
    date: null,
    rates: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const addressAPI = "https://api.exchangerate.host/latest";

      try {
        const response = await fetch(addressAPI);

        if (!response.ok || addressAPI !== "https://api.exchangerate.host/latest") {
          throw new Error(response.statusText);
        }

        const { date, rates } = await response.json();
        setRatesData({ date, rates, status: "success" });

      } catch (error) {
        setRatesData({ status: "error"});
      }
    };
    setTimeout(fetchData, 1_000);

    return () => {
      setRatesData({
        status: "loading",
      });
    };

  }, []);
  
  return ratesData;
};