import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import { Navbar } from "./components/layout";
import { Footer } from "./components/layout/Footer/Footer";
import { ItemListContainer } from "./components/pages";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import { Cart, ProductCard } from "./components/common";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
