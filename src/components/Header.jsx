import { NavLink } from "react-router-dom";
import Logo from "../assets/kasa_logo.webp";

const Header = () => {
  return (
    <header className="Header">
      <img src={Logo} alt="Logo Kasa" className="Header__Logo" />
      <nav className="Header__Nav">
        <NavLink to="/" className="nav__link Link__Index">
          ACCUEIL
        </NavLink>
        <NavLink to="/About" className="nav__link Link__About">
          A PROPOS
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
