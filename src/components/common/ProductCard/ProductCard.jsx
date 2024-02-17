import "./ProductCard.css";

export const ProductCard = ({ title, img, description, price }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img className="imagenProducto" src={img} alt="" />
      <p>{description} </p>
      <h4> {price} </h4>
    </div>
  );
};
