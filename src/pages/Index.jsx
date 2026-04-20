import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import PaysageMarin from "../assets/paysage_marin.webp";

const Index = () => {
  return (
    <div>
      <Header />
      <div className="header__img-title">
        <img src={PaysageMarin} alt="Paysage marin" className="header__img" />
        <h2 className="header__h2">Chez vous, partout et ailleurs</h2>
      </div>
      <Body />
      <Footer />
    </div>
  );
};
export default Index;
