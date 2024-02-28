import CartWidget from "../../common/CartWidget/CartWidget";
import { Grid } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <Grid container sx={{ backgroundColor: "lightgrey" }}>
        <Grid item xs={12} md={3}>
          {" "}
          <Link to="/">
            <img
              className="logo_nav"
              src="https://res.cloudinary.com/dx4kaqyx0/image/upload/v1707146253/React_Project/MusicMart-logo.png"
              alt="MusicMart Logo"
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="categorias">
            <Link to="/">
              <button>Todas las categorías</button>
            </Link>
            <Link to="/category/Guitarras">
              <button>Guitarras</button>
            </Link>
            <Link to="/category/Teclados">
              <button>Teclados</button>
            </Link>
            <Link to="/category/Batería">
              <button>Batería</button>
            </Link>
            <Link to="/category/Bajos">
              <button>Bajos</button>
            </Link>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <Link to="/Cart">
            <CartWidget />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
