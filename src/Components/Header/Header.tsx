import ListButtons from "./ListButtons";
import NavMenu from "./NavMenu";
import "./Header.scss";
import LogoBMWSVG from "../../assets/imgs/logos/LogoBMWSVG";
// import React from "react";

const Header = () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <header className="container header fw-bold">
      <div className="d-flex gap-md flex-column">
        <ListButtons />
        <NavMenu />
      </div>
      <LogoBMWSVG />
    </header>
  );
};

export default Header;
