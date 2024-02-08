import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./itemListContainer.css";

const ItemList = () => {
  return (
    <div>
      {/* <h2 className="bienvenida"> {greetings} </h2> */}

      <ProductCard
        tit={"Guitarra Gracia"}
        desc={"Modelo N23"}
        precio={"$150.000,00"}
      />
      <ProductCard
        tit={"Guitarra Fonseca"}
        desc={"Modelo F2"}
        precio={"$180.000,00"}
      />
      <ProductCard
        tit={"Guitarra Alpujarra"}
        desc={"Modelo 128"}
        precio={"$230.000,00"}
      />
    </div>
  );
};

export default ItemList;
