import { Checkout } from "./Checkout";
import { useState } from "react";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastName: "",
  });

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
    console.log(userInfo);
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return <Checkout envioDeFormulario={envioDeFormulario} capturar={capturar} />;
};
