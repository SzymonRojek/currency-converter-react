import { useState, useEffect } from "react";

export const useApiRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading...",
  });

  useEffect(() => {
    const getApiRates = () => {
      const promise = fetch("https://api.exchangerate.host/latest");

        promise
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response;
          })
          .then(response => response.json())
          .then(response =>
            setRatesData({
              date: response.date,
              rates: response.rates,
            })
          )
          .catch(setRatesData({ state: "error" }));
    };
    setTimeout(getApiRates, 1 * 2_000);

  }, []);
  
  return ratesData;
};