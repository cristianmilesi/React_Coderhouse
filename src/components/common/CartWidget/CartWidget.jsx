import { TiShoppingCart } from "react-icons/ti";
import Counter from "../Counter/Counter";
import Badge from "@mui/material/Badge";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart">
      <Badge badgeContent={cart.lenght} showZero color="primary">
        <TiShoppingCart size="25px" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
