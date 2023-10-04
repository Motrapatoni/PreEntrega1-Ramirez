import { useParams } from "react-router-dom";
import { useItemByName } from "../hooks/useItemByName";
import { PRODUCTS } from '../services/items'; 

export const ItemDetailContainer = () => {
  const { itemName } = useParams();
  const { item, loading } = useItemByName(itemName);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (!item) {
    return <h1>No existe el item</h1>;
  }

  return (
    <div>
      <h1>{PRODUCTS.name}</h1>
      <img
        width={"100px"}
        src={PRODUCTS.images}
        alt={PRODUCTS.name}
      />
      <h3>Habilidades</h3>
      <p>{PRODUCTS.details}</p>
    </div>
  );
};