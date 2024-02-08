export const ProductCard = ({ tit, desc, precio }) => {
  return (
    <div style={{ border: "1px solid gray" }}>
      <h3>{tit}</h3>
      <img src="" alt="" />
      <h4>{desc} </h4>
      <h4> {precio} </h4>
    </div>
  );
};
