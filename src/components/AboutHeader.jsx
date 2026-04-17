import { NavLink } from "react-router-dom";
const AboutHeader = () => {
  return (
    <header>
      <img src="./src/assets/kasa_logo.webp" alt="Logo Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A Propos</NavLink>
      </nav>
      <img
        src="./src/assets/paysage_montagnard.webp"
        alt="Paysage Montagnard"
      />
    </header>
  );
};
export default AboutHeader;
