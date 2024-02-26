import Logo from "../UI/Logo/Logo";
import Cart from "../../assets/cart.svg";
import Navigation from "./Navigation";
import "./nav.scss";
import { navigationLinks } from "../constants/constants";
import { useCountStore } from "../../store/count";

const Nav = () => {
  const { count } = useCountStore();
  return (
    <nav className="nav">
      <Logo />
      <Navigation navigationLinks={navigationLinks} />
      <picture className="nav__image-wrapper">
        <img src={Cart} alt="" />
        <p className="nav__image-wrapper--count">{count}</p>
      </picture>
    </nav>
  );
};

export default Nav;
