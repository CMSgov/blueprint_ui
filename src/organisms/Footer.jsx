import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="usa-footer site-footer">
      <div className="footer-links">
        <a href="https://ato.cms.gov/">About Rapid ATO</a>
        <Link to="/help">Blueprint Support</Link>
      </div>
    </footer>
  );
};

export default Footer;
