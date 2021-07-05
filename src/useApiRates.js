import { useState, useEffect } from "react";

export const useApiRates = () => {
  let [ratesData, setRatesData] = useState({
    status: "loading",
    date: null,
    rates: null,
  });

  useEffect(() => {
    if (ratesData.status === "error") {
      return;
    }

    const apiUrl = "https://api.exchangerate.host/latest";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
       
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { date, rates } = await response.json();
        setRatesData({ date, rates, status: rates ? "success" : "error" });
        
      } catch (error) {
        setRatesData({ status: "error"});
      }
    };
  
      setTimeout(fetchData, 1_000);
  }, []);
  
  return ratesData;
};