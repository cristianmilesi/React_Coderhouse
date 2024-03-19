import CartWidget from "../../common/CartWidget/CartWidget";
import { Grid } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { menuNavigation } from "../../../router/menuNavigation";

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
            {menuNavigation.map(({ id, text, path }) => (
              <Link key={id} to={path}>
                {" "}
                {text}{" "}
              </Link>
            ))}
          </div>
        </Grid>

        <CartWidget />
      </Grid>
    </div>
  );
};
