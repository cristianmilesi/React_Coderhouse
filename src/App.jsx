import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import { ItemListContainer } from "./components/pages";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/Checkout/CheckoutContainer";
import { CartContainer } from "./components/common/Cart/CartContainer.jsx";
import { CartContextProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
              <Route path="*" element={<h2>404 not found</h2>}></Route>
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
