import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="header ">
      <Link to="/">
        <h1 className="text-center">Bar Ecommerce</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="productos/menu">Menu</Link>
          </li>
          <li>
            <Link to="productos/pizza">Pizzas</Link>
          </li>
          <li>
            <Link to="productos/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
