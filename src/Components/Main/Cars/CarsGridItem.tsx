import Button from "../../Utils/Button";
import FacebookSVG from "../../../assets/icons/svg/FacebookSVG";
import WhatsappSVG from "../../../assets/icons/svg/WhatsappSVG";

const CarsGridItem = ({ src, alt }: { src: string; alt: string }) => {
  const mobile = document.documentElement.classList.contains("mobile");

  return (
    <li className="cars__grid-item">
      <article>
        <header>
          <img src={src} alt={alt} />
        </header>
        <div className="cars__grid-content d-flex gap-md">
          <h3>{alt}</h3>
          <div className="d-flex gap-sm">
            <Button
              href="#"
              style={{ flexGrow: 1, backgroundColor: "var(--color-s)" }}
            >
              Cotação
            </Button>
            {mobile && (
              <Button
                href="#"
                className="btn ligar"
                style={{ flexGrow: 1, backgroundColor: "var(--color-3)" }}
              >
                Ligar
              </Button>
            )}
          </div>
          <div className="cars__grid-medias d-flex gap-sm">
            <p>Compartilhe:</p>
            <a href="#" style={{ maxWidth: mobile ? "2.4rem" : "" }}>
              <FacebookSVG />
            </a>
            <a href="#" style={{ maxWidth: mobile ? "2.4rem" : "" }}>
              <WhatsappSVG />
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};

export default CarsGridItem;
