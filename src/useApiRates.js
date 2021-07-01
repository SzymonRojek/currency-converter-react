import { useState, useEffect } from "react";

export const useApiRates = url => {
  const [ratesData, setRatesData] = useState({
    state: "loading...",
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setRatesData(data);

      } catch (error) {
        setRatesData({ state: "error"});
      }
    })();
  }, [url]);
  
  return ratesData;
};