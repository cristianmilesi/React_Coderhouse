import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.jsx";
import "./fonts/Rosario-VariableFont_wght.ttf";
import { AppRouter } from "./router/AppRouter.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
