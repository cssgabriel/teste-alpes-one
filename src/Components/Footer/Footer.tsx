import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
          elementum orci, vitae commodo nibh. In vitae convallis nisl. Morbi
          rhoncus mattis purus sed commodo. Integer rhoncus ex risus. Proin
          efficitur elit nunc, ut pulvinar massa egestas in. Fusce quis quam
          viverra, pretium quam ac, consectetur lectus.
        </p>
        <div className="d-flex footer-info">
          <div className="footer__logo">&nbsp;</div>
          <p className="copyright">
            © Copyright © 2021 Lorem ipsum dolor sit amet.
          </p>
          <div className="d-flex">
            <span>Feito por:</span>
            <img
              src="./src/assets/imgs/logos/logo-alpes.png"
              alt="Logo Alpes One"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
