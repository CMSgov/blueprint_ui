import { Link } from "react-router-dom";
import { Button } from "@trussworks/react-uswds";
import { MAIN_ROUTES } from "../AppRoutes";
import Logo from "../atoms/Logo";

const Header = () => {
  const logoutUser = () => {
    sessionStorage.clear();
    window.location.assign(MAIN_ROUTES.LOGIN);
  };

  const username = sessionStorage.getItem("Username");

  return (
    <header className="site-header">
      <div className="header-left">
        <div id="logo">
          <Link to={MAIN_ROUTES.HOME}>
            <Logo />
          </Link>
        </div>
        <Link to={MAIN_ROUTES.PROJECTS}>Projects</Link>
        <Link to={MAIN_ROUTES.COMPONENT_LIBRARY}>Component Library</Link>
      </div>

      <div className="header-right">
        <Link to={MAIN_ROUTES.HELP}>Help</Link>
        {username && <Button onClick={logoutUser}>{username}</Button>}
      </div>
    </header>
  );
};

export default Header;
