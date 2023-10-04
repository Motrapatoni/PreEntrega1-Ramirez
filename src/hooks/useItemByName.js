import { useEffect, useState } from "react";
import { getItemByName } from "../services/items";

export const useItemByName = (itemName) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemByName(itemName)
      .then((data) => data.json())
      .then((data) => setItem(data))
      .finally(() => setLoading(false));
  }, [itemName]);

  return {
    item,
    loading
  };
};