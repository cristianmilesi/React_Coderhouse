import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = ({ title, description, img, price, stock, id }) => {
  return (
    <div>
      <h2> {title} </h2>
      <img src={img} alt="Imágen de Producto" />
      <h3> {price} </h3>
      <p> {description} </p>
      <button>Agregar al carrito</button>
      <ItemCountContainer stock={stock} />
    </div>
  );
};
