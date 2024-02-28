import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./itemListContainer.css";
import "./itemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="cardContainer">
      {products.map(({ id, img, title, description, price }) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            description={description}
            price={price}
            id={id}
          />
        );
      })}
    </div>
  );
};
