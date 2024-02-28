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
          <Route path="/cart" element={<Cart />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      {/* <Footer /> */}
      {/* <ItemCountContainer stock={10} />
      <ItemCountContainer stock={5} /> */}
    </>
  );
}

export default App;
