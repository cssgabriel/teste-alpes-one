import ListButtons from "./ListButtons";
import NavMenu from "./NavMenu";
import "./Header.scss";
// import React from "react";

const Header = () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <header className="container header d-flex gap-md flex-column fw-bold">
      <ListButtons />
      <NavMenu />
    </header>
  );
};

export default Header;
