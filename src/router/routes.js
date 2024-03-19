import { CartContainer } from "../components/common/Cart/CartContainer";
import { ItemDetailContainer, ItemListContainer } from "../components/pages";
import { CheckoutContainer } from "../components/pages/Checkout/CheckoutContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:category",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "detail",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
