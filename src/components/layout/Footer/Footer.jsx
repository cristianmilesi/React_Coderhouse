import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export const Footer = () => {
  return (
    <div className="footer_container">
      <div className="texto_footer">
        <h4>MusicMart</h4>
        <p>Tu tienda de instrumentos musicales</p>
      </div>
      <div className="icons_footer">
        <FaInstagram />
        <MdOutlineEmail />
        <TbWorld />
      </div>
    </div>
  );
};
