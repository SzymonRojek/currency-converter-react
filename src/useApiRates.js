import { useState, useEffect } from "react";

export const useApiRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest");

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

    return () => {
      setRatesData({
        status: "loading",
      });
    };

  },[]);
  
  return ratesData;
};