import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./ItemListContainer.css";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="FondoContainer">
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
    </div>
  );
};
