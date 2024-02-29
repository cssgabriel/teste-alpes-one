import Circle360SVG from "../assets/icons/svg/Circle360SVG";
import TelefoneSVG from "../assets/icons/svg/TelefoneSVG";
import WhatsappSVG from "../assets/icons/svg/WhatsappSVG";
import Button from "./Utils/Button";

const Header = () => {
  return (
    <header className="header">
      <Button href="tel:+552120424442">
        <TelefoneSVG />
        (21)2042-4442
      </Button>
      <Button style={{ textTransform: "uppercase" }}>
        <Circle360SVG />
        Tour virtual
      </Button>
      <Button style={{ textTransform: "uppercase" }}>
        <WhatsappSVG />
        Whatsapp
      </Button>
    </header>
  );
};

export default Header;
