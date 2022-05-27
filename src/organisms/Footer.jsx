import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="usa-footer site-footer">
            <div className="footer-links">
                <Link to={{ pathname: "https://ato.cms.gov/" }} target="_blank">About Rapid ATO</Link>
                <Link to="/help">Blueprint Support</Link>
            </div>
        </footer>
    );
};

export default Footer;
