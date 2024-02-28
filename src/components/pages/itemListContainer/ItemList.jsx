import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./itemListContainer.css";
import "./itemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="cardContainer">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
