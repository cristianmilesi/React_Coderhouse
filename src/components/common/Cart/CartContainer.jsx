import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";

export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
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
    <div className="cart_layout">
      <div className="cart_container">
        {cart.map((product) => (
          <div className="cart_card" key={product.id}>
            <div className="cart_image_container">
              <img className="cart_image" src={product.img} alt="" />
            </div>
            <div>
              <h4> Producto: {product.title}</h4>
              <h5>Cantidad: {product.quantity}</h5>
              <h4>
                Precio unitario:$
                {Number(product.price).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
              </h4>
            </div>
            <Button
              size="small"
              variant="outlined"
              onClick={() => removeById(product.id)}
            >
              Eliminar
            </Button>
          </div>
        ))}
      </div>
      <div className="cart_resumen">
        <h4>El total a pagar es</h4>
        <h3>
          $
          {Number(total).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h3>
        <Button variant="outlined" onClick={limpiarConAlerta}>
          Limpiar Carrito
        </Button>
        <Link to="/checkout">
          <Button variant="contained">Terminar compra</Button>
        </Link>
      </div>
    </div>
  );
};
