import { Expense } from "context";
import { useState, useEffect } from "react";

export const useDebounce = (value: Expense[], delay = 500) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};

// useDebounce-позволяет вам дебаунсить любое быстро меняющееся значение. Значение
// debounced будет отражать только последнее значение, когда хук useDebounce не вызывался
// в течение указанного периода времени. При использовании в сочетании с useEffect,
// как мы делаем в приведенном ниже рецепте, вы можете легко гарантировать, что
// дорогостоящие операции, такие как вызовы API, не будут выполняться слишком часто.
// В приведенном ниже примере вы можете выполнять поиск в API комиксов Marvel и
// использовать useDebounce для предотвращения запуска вызовов API при каждом
//нажатии клавиши.
