import { useEffect, useState } from "react";
import { getItemsList } from "../services/items";

export const useItemsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItemsList()
        .then((data) => data.json())
        .then((data) => setItems(data.results));
    }, []);

    return {
        items
    };
}