import Logo from "../UI/Logo/Logo";
import Navigation from "./Navigation";
import "./nav.scss";
import { navigationLinks } from "../constants/constants";

const Nav = () => {
  return (
    <nav className="nav">
      <Logo />
      <Navigation navigationLinks={navigationLinks} />
    </nav>
  );
};

export default Nav;
