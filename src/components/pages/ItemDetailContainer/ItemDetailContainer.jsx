import { ItemDetail } from "../";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../asyncMock";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(+id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <>
      {isLoading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <ItemDetail {...item} onAdd={onAdd} initial={initial} />
      )}
    </>
  );
};
