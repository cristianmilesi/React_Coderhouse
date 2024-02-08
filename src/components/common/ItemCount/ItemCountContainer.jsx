import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("LLegaste al máximo de stock");
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return <ItemCount counter={counter} addOne={addOne} subOne={subOne} />;
};

export default ItemCountContainer;
