import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import { ItemListContainer } from "./components/pages";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import { Cart, ProductCard } from "./components/common";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
