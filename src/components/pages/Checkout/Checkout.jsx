import { TextField, Button } from "@mui/material";
import "./Checkout.css";
import { Link } from "react-router-dom";
Link;

export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <div className="checkout_container">
      {orderId ? (
        <div className="compra_realizada">
          <h2>Gracias por tu compra</h2>
          <h5>Tu número de compra es {orderId} </h5>
          <Link to="/">
            <Button variant="outlined">Volver a comprar</Button>
          </Link>
        </div>
      ) : (
        <div className="form_container">
          <div className="form_titulo">
            <h4>Ingresa tus datos para finalizar la compra</h4>
          </div>

          <form className="form_checkout" onSubmit={envioDeFormulario}>
            <TextField
              size="small"
              name="name"
              label="Name"
              variant="outlined"
              onChange={capturar}
            />

            <TextField
              size="small"
              name="phone"
              label="Teléfono"
              variant="outlined"
              onChange={capturar}
            />

            <TextField
              size="small"
              name="email"
              label="E-mail"
              variant="outlined"
              onChange={capturar}
            />

            <Button
              type="submit"
              variant="contained"
              className="checkout_button"
            >
              Comprar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
