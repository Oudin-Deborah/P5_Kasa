import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import PaysageMarin from "../assets/paysage_marin.webp";

const Index = () => {
  return (
    <div>
      <Header />
      <img src={PaysageMarin} alt="Paysage marin" className="header__img"/>
      <Body />
      <Footer />
    </div>
  );
};
export default Index;
