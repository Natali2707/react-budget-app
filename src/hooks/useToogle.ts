import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};

// useToggle-этот хук делает то, что он принимает параметр со
//  значением true или false и переключает это значение на
// противоположное. Это полезно, когда мы хотим сделать какое-то
//  действие противоположным, например: показать и скрыть модальное
//  окно, показать больше/показать меньше текста, открыть/закрыть боковое меню.
