import Header from "../components/Header";
import Footer from "../components/Footer";
import { Articles } from "../components/Fetch";
import Body from "../components/BodyIndex";
import PaysageMarin from "../assets/paysage_marin.webp";

const Index = () => {
  return (
    <div>
      <Header />

      <div className="header__img-title">
        <div className="Img__Shadow">
          <img src={PaysageMarin} alt="Paysage marin" className="Index__Header__img" />
        </div>
        <h2 className="header__h2">Chez vous, partout et ailleurs</h2>
      </div>
      <main className="Index__Main">
        <Body />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
