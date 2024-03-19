import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, title, img, description, price }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img className="imagenProducto" src={img} alt="" />
      <p>{description} </p>
      <h4> ${price} </h4>
      <Link to={`/item/${id}`}>
        <button>Detalles</button>
      </Link>
    </div>
  );
};
