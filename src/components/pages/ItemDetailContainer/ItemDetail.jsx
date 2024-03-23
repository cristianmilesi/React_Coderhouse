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
      <div className="text_detail">
        <h3>
          {" "}
          $
          {Number(price).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
        </h3>

        <p> {description} </p>
      </div>
      <div>
        {initial && <h4>Ya tienes {initial} en el carrito </h4>}
        <ItemCountContainer stock={stock} onAdd={onAdd} initial={initial} />
      </div>
    </div>
  );
};
