import { useState, useEffect } from "react";

export const useApiRates = () => {
  const [ratesData, setRatesData] = useState({
    status: "loading",
    date: null,
    rates: null,
  });

  useEffect(() => {
    const addressAPI = "https://api.exchangerate.host/latest";
    const correctAddressAPI = "https://api.exchangerate.host/latest";

    if (addressAPI !== correctAddressAPI) {
      setRatesData({ status: "error" });
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(addressAPI);

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
    }
  }, []);
  
  return ratesData;
};