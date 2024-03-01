import ListButtons from "./ListButtons";
import NavMenu from "./NavMenu";
import "./Header.scss";
import React from "react";
import TelefoneSVG from "../../assets/icons/svg/TelefoneSVG";
import Button from "../Utils/Button";

const Header = ({
  fixed,
  children,
}: {
  children?: React.ReactNode;
  fixed?: boolean;
}) => {
  const mobile = document.documentElement.classList.contains("mobile");
  return (
    <>
      <header className={`header fw-bold ${fixed ? "fixed" : "container"}`}>
        <div className="nav-menu d-flex gap-md flex-column">
          <ListButtons />
          <NavMenu />
        </div>
        {!fixed && mobile && (
          <Button
            style={{ backgroundColor: "transparent", color: "var(--color-3)" }}
            href="tel:+552120424442"
          >
            <TelefoneSVG />
            (21)2042-4442
          </Button>
        )}
        <div className="header__logo">&nbsp;</div>
        {children}
      </header>
      {!fixed && mobile && (
        <Button
          style={{ backgroundColor: "var(--color-s)", color: "var(--color-1)" }}
          href="#"
        >
          Solicite uma cotação
        </Button>
      )}
    </>
  );
};

export default Header;
