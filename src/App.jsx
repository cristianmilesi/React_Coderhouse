import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
// import { Footer } from "./components/layout/Footer/Footer";
import { Navbar } from "./components/layout/Navbar/Navbar";
// import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer greetings="¡Hola! Bienvenido a la tienda" />
      <Footer /> */}
      <ItemCountContainer stock={10} />
      <ItemCountContainer stock={5} />
    </div>
  );
}

export default App;
