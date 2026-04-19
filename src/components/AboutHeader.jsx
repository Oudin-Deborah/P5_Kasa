import { NavLink } from "react-router-dom";
import Logo from "../assets/kasa_logo.webp"
import PaysageMontagnard from "../assets/paysage_montagnard.webp"
const AboutHeader = () => {
  return (
    <header>
      <img src={Logo} alt="Logo Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A Propos</NavLink>
      </nav>
      <img
        src={PaysageMontagnard}
        alt="Paysage Montagnard"
      />
    </header>
  );
};
export default AboutHeader;
