import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <main className="page__error">
        <h1 className="title__error">404</h1>
        <p className="p__error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <nav>
          <NavLink to="/" className="main__nav">
            Retourner sur la page d'accueil
          </NavLink>
        </nav>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
