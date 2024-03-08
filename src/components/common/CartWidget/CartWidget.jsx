import { TiShoppingCart } from "react-icons/ti";
import Counter from "../Counter/Counter";
import Badge from "@mui/material/Badge";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
