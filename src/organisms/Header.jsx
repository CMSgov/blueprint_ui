import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import UserStub from "../stub";

const Header = () => {
    // @TODO: notification counter? needs functionality to be built
    const count = 0;
    const userName = UserStub.username;
    return (
        <header className="usa-header site-header site-header-dark" role="banner">
            <div className="usa-navbar site-header-navbar">
                <div id="logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <Link to="/projects">Projects</Link>
                {/* @TODO: change component library to a link when it exists */}
                <span to="/componentLibrary">Component Library</span>
                <div className="site-header-right">
                    <Link to="/help">Help</Link>
                    <span className="usa-media-block__img circle-4 bg-base display-flex flex-row flex-align-center flex-justify-center text-white">{count}</span>
                    {/* @TODO: change user to a link when it exists */}
                    <span to="/user">{userName}</span>
                </div>
            </div>
        </header>
        );
};
    
export default Header;
