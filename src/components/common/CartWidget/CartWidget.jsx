import { TiShoppingCart } from "react-icons/ti";
import Counter from "../Counter/Counter";
import Button from "@mui/material/Button";

const CartWidget = () => {
  return (
    <div>
      <Button variant="contained">
        {" "}
        <TiShoppingCart size="20px" />
        <Counter />{" "}
      </Button>
    </div>
  );
};

export default CartWidget;
