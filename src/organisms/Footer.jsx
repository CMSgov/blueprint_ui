import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="usa-footer site-footer">
            <div>
            <Link to={{ pathname: "https://ato.cms.gov/" }} target="_blank">About Rapid ATO</Link>
            <Link to="/help">Blueprint Support</Link>
            <span className="footer-item">© GovReady PBC 2022</span>
            <span className="footer-item">v0.9.12-dev</span>
            </div>
        </footer>
    );
};

export default Footer;