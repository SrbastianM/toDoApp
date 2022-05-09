import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageToDo =
          typeof window !== "undefined" ? localStorage.getItem(itemName) : null;
        // Custom, hook para realizar el uso del localStorge
        let parsedItem;
        if (!localStorageToDo) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageToDo);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
    }
  });

  const saveItem = (newArrItem) => {
    try {
      const stringifyItem = JSON.stringify(newArrItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newArrItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading, error };
}

export { useLocalStorage };
