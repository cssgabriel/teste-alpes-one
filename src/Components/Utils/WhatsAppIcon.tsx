import WhatsappSVG from "../../assets/icons/svg/WhatsappSVG";
import "./Button.scss";

const WhatsAppIcon = ({ href }: { href: string }) => {
  return (
    <a href={href} className="btn--whats">
      <WhatsappSVG />
    </a>
  );
};

export default WhatsAppIcon;
