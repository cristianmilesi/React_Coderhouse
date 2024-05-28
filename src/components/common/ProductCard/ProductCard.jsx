import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ProductCard = ({ id, title, img, description, price }) => {
  return (
    <div className="card_container">
      <h4>{title}</h4>
      <div className="imagen_container">
        <img className="imagen_producto" src={img} alt="" />
      </div>
      <div className="text_container">
        <h4>
          {" "}
          $
          {Number(price).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h4>
      </div>
      <Link to={`/item/${id}`}>
        <Button color="secondary" size="small" variant="outlined">
          Detalles
        </Button>
      </Link>
    </div>
  );
};
