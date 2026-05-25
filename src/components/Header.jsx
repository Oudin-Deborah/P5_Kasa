import { NavLink } from "react-router-dom";
import Logo from "../assets/kasa_logo.webp";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" />
      <nav>
        <NavLink to="/" className="nav__link Link__Index">
          Accueil
        </NavLink>
        <NavLink to="/About" className="nav__link Link__About">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
