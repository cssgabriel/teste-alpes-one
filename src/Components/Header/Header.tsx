import ListButtons from "./ListButtons";
import NavMenu from "./NavMenu";
import "./Header.scss";
import React from "react";
import TelefoneSVG from "../../assets/icons/svg/TelefoneSVG";
import Button from "../Utils/Button";
import Modal from "../Utils/Modal";
import Form from "../Utils/Form/Form";

const Header = ({
  fixed,
  children,
}: {
  children?: React.ReactNode;
  fixed?: boolean;
}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const mobile = document.documentElement.classList.contains("mobile");

  return (
    <>
      <header
        className={`header fw-bold ${fixed ? "fixed" : "container"} ${
          mobile ? "mobile" : ""
        }`}
      >
        <div className="nav-menu d-flex gap-md flex-column">
          <ListButtons />
          <NavMenu />
        </div>
        {mobile && (
          <Button
            style={{ backgroundColor: "transparent", color: "var(--color-3)" }}
            href="tel:+552120424442"
          >
            <TelefoneSVG />
            (21)2042-4442
          </Button>
        )}
        <div className="header__logo">&nbsp;</div>
        {!mobile && children}
      </header>
      {mobile && (
        <Button
          style={{
            backgroundColor: "var(--color-s)",
            color: "var(--color-1)",
            position: fixed ? "fixed" : "static",
            top: "8.4rem",
            left: "0",
            right: "0",
          }}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(!openModal);
          }}
        >
          Solicite uma cotação
        </Button>
      )}
      {mobile && openModal && (
        <>
          <Button
            style={{
              backgroundColor: "var(--color-3)",
              color: "var(--color-1)",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
            }}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(!openModal);
            }}
          >
            Minimizar
          </Button>
          <Modal className="top" style={{ inset: "4.28rem 0 0 0" }}>
            <Form />
          </Modal>
        </>
      )}
    </>
  );
};

export default Header;
