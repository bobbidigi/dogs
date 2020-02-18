import { useState } from "react";

export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const customSetter = newValue => {
    setValue(newValue);
  };
  return [value, customSetter];
}

// export function useLocalStorage(key, initialValue){
//     const [value, setValue] = useInput(()=>{
//         return window.localStorage.getItem(key) || initialValue
//     })

//     const customSetter = (newValue) => {
//         setValue(newValue)
//         window.localStorage.setItem(key, newValue)
//     }

//     return [value, customSetter]
// }

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      // if username, we're getting username key from localStorage
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = value => {
    console.log("setValue is running");
    // I want you guys to set the storedValue into localStorage
    setStoredValue(value);
    // if username, we're setting username key to localStorage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
