const NavMenu = () => {
  return (
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
  );
};

export default NavMenu;
