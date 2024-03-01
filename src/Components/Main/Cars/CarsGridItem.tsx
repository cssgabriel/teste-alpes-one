import Button from "../../Utils/Button";
import FacebookSVG from "../../../assets/icons/svg/FacebookSVG";
import WhatsappSVG from "../../../assets/icons/svg/WhatsappSVG";

const CarsGridItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <li className="cars__grid-item">
      <article>
        <header>
          <img src={src} alt={alt} />
        </header>
        <div className="cars__grid-content d-flex gap-md">
          <h3>{alt}</h3>
          <Button href="#" style={{ backgroundColor: "var(--color-s)" }}>
            Cotação
          </Button>
          <div className="cars__grid-medias d-flex gap-sm">
            <p>Compartilhe:</p>
            <a href="#">
              <FacebookSVG />
            </a>
            <a href="#">
              <WhatsappSVG />
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};

export default CarsGridItem;
