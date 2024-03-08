import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  return (
    <div>
      {cart.map((product) => (
        <div key={product.id}>
          <h2> Producto: {product.title}</h2>
          <h2>Cantidad: {product.quantity}</h2>
          <button onClick={() => removeById(product.id)}>Eliminar</button>
        </div>
      ))}

      <h2>El total a pagar es ${total}</h2>
      <button onClick={clearCart}>Limpiar Carrito</button>

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
