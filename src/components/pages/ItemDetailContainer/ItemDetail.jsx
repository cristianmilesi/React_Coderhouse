import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetail.css";
import Button from "@mui/material/Button";

export const ItemDetail = ({
  title,
  description,
  img,
  price,
  stock,
  onAdd,
}) => {
  return (
    <div className="ItemDetail_container">
      <h2> {title} </h2>
      <img className="ImgProduct" src={img} alt="Imágen de Producto" />
      <h3> {price} </h3>
      <p> {description} </p>
      {initial ? (
        <h4>Ya tienes {initial} en el carrito </h4>
      ) : (
        <h2>No tienes unidades</h2>
      )}
      <ItemCountContainer stock={stock} onAdd={onAdd} initial={initial} />
    </div>
  );
};
