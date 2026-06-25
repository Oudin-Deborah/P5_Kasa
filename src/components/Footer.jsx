import footerImg from "../assets/footer.webp";
import footerMobile from "../assets/footer mobile.webp";

const Footer = () => {
  return (
    <footer>
      <img src={footerImg} alt="Footer Kasa" className="Footer__Img" />
      <img src={footerMobile} alt="Footer Kasa" className="Footer__Mobile" />
    </footer>
  );
};

export default Footer;
