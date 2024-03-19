export const Checkout = ({ envioDeFormulario, capturar, orderId }) => {
  return (
    <>
      {orderId ? (
        <h2>Gracias. Tu número de compra es {orderId} </h2>
      ) : (
        <form onSubmit={envioDeFormulario}>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={capturar}
            name="name"
          />
          <input
            type="text"
            placeholder="Ingresa teléfono"
            onChange={capturar}
            name="phone"
          />

          <input
            type="text"
            placeholder="Ingresa tu email"
            onChange={capturar}
            name="email"
          />
          <button type="submit"> Comprar </button>
        </form>
      )}
    </>
  );
};
