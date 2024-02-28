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
          <ul className="categorias">
            <li>Todas las categorías</li>
            <li>Guitarras</li>
            <li>Teclados</li>
            <li>Batería</li>
            <li>Bajos</li>
          </ul>
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
