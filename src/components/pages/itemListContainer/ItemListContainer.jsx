import { useEffect, useState } from "react";
// import { products } from "../../../productsMock";
import { ItemList } from "..";
import { getProducts } from "../../../asyncMock";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp);
      setIsLoading(false);
    });
  }, []);

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
