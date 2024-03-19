import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  title,
  description,
  img,
  price,
  stock,
  onAdd,
  initial,
}) => {
  return (
    <div className="ItemDetail_container">
      <h2> {title} </h2>
      <img className="ImgProduct" src={img} alt="Imágen de Producto" />
      <h3> ${price} </h3>
      <p> {description} </p>
      {initial && <h4>Ya tienes {initial} en el carrito </h4>}
      <ItemCountContainer stock={stock} onAdd={onAdd} initial={initial} />
    </div>
  );
};
