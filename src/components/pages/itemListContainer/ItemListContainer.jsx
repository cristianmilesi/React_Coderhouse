import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { getProducts } from "../../../asyncMock";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true)
    // let productsCollection = collection(db, "products");
    // getDocs(productsCollection)
    //   .then((res) => {
    //     let arrayLindo = res.docs.map((elemento) => {
    //       return { ...elemento.data(), id: elemento.id };
    //     });
    //     setProducts(arrayLindo);
    //   })
    //   .finally(() => setIsLoading(false));

    let productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayLindo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setProducts(arrayLindo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <>
      {isLoading ? (
        <h2>Cargando Productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
