import ListButtons from "./ListButtons";
import "./Header.scss";
// import React from "react";

const Header = () => {
  // const [open, setOpen] = React.useState(false);
  return (
    <header className="header d-flex gap-md flex-column fw-bold">
      <ListButtons />
      <nav>
        <ul
          className="d-flex gap-xl header__navlist"
          onClick={({ target }) => console.log(target)}
        >
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>X</li>
          <li>Z</li>
          <li>M</li>
          <li>i</li>
          <li>Plug-in-Hybrid</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
