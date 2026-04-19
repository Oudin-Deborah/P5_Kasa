import { NavLink } from "react-router-dom";
import Logo from "../assets/kasa_logo.webp";
import PaysageMarin from "../assets/paysage_marin.webp";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" />
      <nav>
        <NavLink to="/" className="nav__link">
          Accueil
        </NavLink>
        <NavLink to="/About" className="nav__link">
          A Propos
        </NavLink>
      </nav>
      <img src={PaysageMarin} alt="Paysage marin" />
    </header>
  );
};
export default Header;
