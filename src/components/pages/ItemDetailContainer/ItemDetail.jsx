import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetail.css";
import Button from "@mui/material/Button";

export const ItemDetail = ({ title, description, img, price, stock }) => {
  return (
    <div className="ItemDetail_container">
      <h2> {title} </h2>
      <img className="ImgProduct" src={img} alt="Imágen de Producto" />
      <h3> {price} </h3>
      <p> {description} </p>
      <ItemCountContainer stock={stock} />
      <div>
        <Button variant="outlined">Agregar al carrito</Button>
      </div>
    </div>
  );
};