import Circle360SVG from "../../assets/icons/svg/Circle360SVG";
import TelefoneSVG from "../../assets/icons/svg/TelefoneSVG";
import WhatsappSVG from "../../assets/icons/svg/WhatsappSVG";
import Button from "../Utils/Button";

const ListButtons = () => {
  return (
    <ul className="d-flex gap-md">
      <li>
        <Button href="tel:+552120424442">
          <TelefoneSVG />
          (21)2042-4442
        </Button>
      </li>
      <li>
        <Button style={{ textTransform: "uppercase" }}>
          <Circle360SVG />
          Tour virtual
        </Button>
      </li>
      <li>
        <Button
          style={{
            textTransform: "uppercase",
            backgroundColor: "var(--color-accent)",
          }}
        >
          <WhatsappSVG />
          Whatsapp
        </Button>
      </li>
    </ul>
  );
};

export default ListButtons;
