// import { Link } from "react-router-dom";
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
                    <a href="/">
                        <Logo />
                    </a>
                </div>
                <a href="/projects">Projects</a>
                {/* @TODO: change component library to a link when it exists */}
                <a href="/componentLibrary">Component Library</a>
                <div className="site-header-right">
                    <a href="/help">Help</a>
                    <span className="usa-media-block__img circle-4 bg-base display-flex flex-row flex-align-center flex-justify-center text-white">{count}</span>
                    {/* @TODO: change user to a link when it exists */}
                    <a href="/user">{userName}</a>
                </div>
            </div>
        </header>
        );
};
    
export default Header;

