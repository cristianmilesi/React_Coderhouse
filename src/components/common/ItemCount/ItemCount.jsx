import Button from "@mui/material/Button";
import "./ItemCount.css";

const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <div className="contador_container">
      <div>
        <Button
          variant="contained"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          -
        </Button>
      </div>
      <div>
        <h4>{counter}</h4>
      </div>
      <div>
        <Button variant="contained" onClick={addOne}>
          +
        </Button>
      </div>
      <div>
        <Button variant="outlined" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
