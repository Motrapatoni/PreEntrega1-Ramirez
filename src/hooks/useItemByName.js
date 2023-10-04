import { useEffect, useState } from "react";
import { getItemByName } from "../services/items";

export const useItemByName = (name) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 2000;

    if (loading) {
      const timeoutId = setTimeout(() => {
        getItemByName(name)
          .then((data) => {
            setItem(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error al obtener el producto:", error);
            setLoading(false);
          });
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [name, loading]);

  return {
    item,
    loading
  };
};
