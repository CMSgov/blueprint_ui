const Help = () => {
  return (
    <>
      <h1>Help</h1>
      <p>
        Browse the FAQs for for quick answers or visit the website for in-depth
        information. Contact us directly if you have a comment or don't find
        what you're looking. Thank you for using Blueprint!
      </p>
      <ul className="usa-card-group">
        <li className="usa-card flex-4">
          <div className="usa-card__container">
            <div className="usa-card__header">
              <h3>Frequently Asked Questions</h3>
            </div>
            <div className="usa-card__body">
              <span>Most popular inquiries</span>
            </div>
            <div className="usa-card__footer">
              <a href="/help/faq">
                <button className="usa-button">Read the FAQs</button>
              </a>
            </div>
          </div>
        </li>
        <li className="usa-card flex-4">
          <div className="usa-card__container">
            <div className="usa-card__header">
              <h3>About CMS Rapid ATO</h3>
            </div>
            <div className="usa-card__body">
              <span>Read more about the initiative</span>
            </div>
            <div className="usa-card__footer">
              <a href="https://ato.cms.gov/">
                <button className="usa-button">Learn more</button>
              </a>
            </div>
          </div>
        </li>
        <li className="usa-card flex-4">
          <div className="usa-card__container">
            <div className="usa-card__header">
              <h3>Contact Us</h3>
            </div>
            <div className="usa-card__body">
              <span>We look forward to connecting</span>
            </div>
            <div className="usa-card__footer">
              <a href="/help/contact-us">
                <button className="usa-button">Contact us</button>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Help;
