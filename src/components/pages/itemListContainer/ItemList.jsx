import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./itemListContainer.css";
import "./itemList.css";

const ItemList = ({ items }) => {
  return (
    <div className="cardContainer">
      {items.map((item) => {
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

export default ItemList;
