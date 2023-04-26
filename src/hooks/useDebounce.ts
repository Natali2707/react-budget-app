import { Expense } from "context";
import { useState, useEffect } from "react";

export const useDebounce = (value: Expense[], delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {

      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], 
  );
  return debouncedValue;
};

