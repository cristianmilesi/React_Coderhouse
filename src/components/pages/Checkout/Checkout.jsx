export const Checkout = ({ envioDeFormulario, capturar }) => {
  return (
    <>
      <h1>Este es el Checkout</h1>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturar}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          onChange={capturar}
          name="lastName"
        />
        <button type="submit"> enviar </button>
      </form>
    </>
  );
};
