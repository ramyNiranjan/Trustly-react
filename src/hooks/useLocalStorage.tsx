import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: boolean) {
  const [value, setValue] = useState(() => {
    const localStorageVal = localStorage.getItem(key);

    return localStorageVal !== null
      ? JSON.parse(localStorageVal)
      : initialValue;
  });

  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      setValue(initialValue);
    }
  }, [key, initialValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
