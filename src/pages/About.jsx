import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import PaysageMontagnard from "../assets/paysage_montagnard.webp";
const About = () => {
  return (
    <div>
      <Header />
    <img src={PaysageMontagnard} alt="Paysage Montagnard" className="header__img" />
      <Body />
      <Footer />
    </div>
  );
};
export default About;
