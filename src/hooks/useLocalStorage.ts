import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getValue = (key: string): string => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key) || "0";
  }
  return "";
};

type useLocalStorageType = [string, Dispatch<SetStateAction<string>>];

/**
 * localStorage state
 */
const useLocalStorage = function (key: string): useLocalStorageType {
  // Get the value saved on localStorage
  const [value, setValue] = useState(() => getValue(key));

  // Set on localStorage the state every time the value change
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
