import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@trussworks/react-uswds";
import { MAIN_ROUTES } from "../AppRoutes";
import AuthContext from "../AuthContext";
import Logo from "../atoms/Logo";

const Header = () => {
  let { logoutUser } = useContext(AuthContext);

  const username = sessionStorage.getItem("Username");

  return (
    <header className="usa-header site-header site-header-dark" role="banner">
      <div className="usa-navbar site-header-navbar">
        <div id="logo">
          <Link to={MAIN_ROUTES.HOME}>
            <Logo />
          </Link>
        </div>

        <Link to={MAIN_ROUTES.PROJECTS}>Projects</Link>
        <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>Component Library</Link>
        <div className="site-header-right">
          <Link to={MAIN_ROUTES.HELP}>Help</Link>
          {username && <Button onClick={logoutUser}>{username}</Button>}
        </div>
      </div>
    </header>
  );
};

export default Header;
