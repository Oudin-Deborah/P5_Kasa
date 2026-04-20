import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import PaysageMontagnard from "../assets/paysage_montagnard.webp";
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
      <Body />
      <Footer />
    </div>
  );
};
export default About;
