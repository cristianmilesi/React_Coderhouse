import { ItemDetail } from "../";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../asyncMock";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
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
