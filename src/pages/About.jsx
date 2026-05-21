import Header from "../components/Header";
import Footer from "../components/Footer";
import PaysageMontagnard from "../assets/paysage_montagnard.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="header">
      <Header />
      <div className="header__img-title">
        <img
          src={PaysageMontagnard}
          alt="Paysage Montagnard"
          className="header__img"
        />
      </div>
      <main>
        <ul className="bodyAbout__list">
          <li className="bodyAbout__options">
            Fiabilité <FontAwesomeIcon icon={faAngleDown} className="icon" />
          </li>

          <p className="bodyAbout__content">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
          <li className="bodyAbout__options">
            Respect
            <FontAwesomeIcon icon={faAngleDown} className="icon" />
          </li>
          <p className="bodyAbout__content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
          <li className="bodyAbout__options">
            Service
            <FontAwesomeIcon icon={faAngleDown} className="icon" />
          </li>
          <p className="bodyAbout__content">
            La qualité du service est au cœur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
          <li className="bodyAbout__options">
            Sécurité
            <FontAwesomeIcon icon={faAngleDown} className="icon" />
          </li>
          <p className="bodyAbout__content">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </ul>
      </main>
      <Footer />
    </div>
  );
};
export default About;
