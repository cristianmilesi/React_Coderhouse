import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
//css

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <h2> {item.title} </h2>
      <img src={item.img} alt="" />
      <h4> {item.description} </h4>
      <h3> {item.price} </h3>
      <p> {item.description} </p>
      <button>Agregar al carrito</button>
      <ItemCountContainer stock={item.stock} onAdd={onAdd} />
    </div>
  );
};
