import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <header>
        <img src="./src/assets/kasa_logo.webp" alt="Logo Kasa" />
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/About">A Propos</NavLink>
        </nav>
      </header>
      <main>
        <h1 className="title__error">404</h1>
        <nav>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </nav>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
