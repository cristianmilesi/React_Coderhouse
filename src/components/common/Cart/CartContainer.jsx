import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no se cambió", "", "info");
      }
    });
  };
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
      <button onClick={limpiarConAlerta}>Limpiar Carrito</button>

      <Link to="/checkout">
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </div>
  );
};
