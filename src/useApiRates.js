import { useState, useEffect } from "react";

export const useRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading...",
  });

  useEffect(() => {
    const getApiRates = () => {

      setTimeout(() => {
        fetch("https://api.exchangerate.host/latest")
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response;
          })
          .then((response) => response.json())
          .then((response) =>
            setRatesData({
              date: response.date,
              rates: response.rates,
            })
          )
          .catch(setRatesData({ state: "error" }));
      });
    };

    setTimeout(getApiRates, 1 * 1000);
  }, []);
  
  return ratesData;
};