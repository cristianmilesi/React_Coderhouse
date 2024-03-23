import CartWidget from "../../common/CartWidget/CartWidget";
import { Grid } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { menuNavigation } from "../../../router/menuNavigation";

export const Navbar = () => {
  return (
    <div className="nav">
      <Grid container className="nav_container">
        <Grid item xs={12} md={3}>
          {" "}
          <Link to="/">
            <img
              className="logo_nav"
              src="https://res.cloudinary.com/dx4kaqyx0/image/upload/v1711042750/React_Project/MusicMart__1_-removebg-preview_xes5h1.png"
              alt="MusicMart Logo"
            />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="categorias">
            {menuNavigation.map(({ id, text, path }) => (
              <Link className="enlaces" key={id} to={path}>
                {" "}
                {text}{" "}
              </Link>
            ))}
            <CartWidget />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
