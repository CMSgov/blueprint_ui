const Help = () => {
    return (
        <>
            <h1>Help</h1>
            <p>Browse the FAQs for for quick answers or visit the website for in-depth information. Contact us directly if you have a comment or don’t find what you’re looking. Thank you for using Blueprint!</p>
            <div className="usa-card-group grid-row">
                <div className="usa-card__container grid-col-3">
                    <div className="usa-card__header">
                        <h3>Frequently Asked Questions</h3>
                    </div>
                    <div className="usa-card__body">
                        <span>Most popular inquiries</span>
                    </div>
                    <div className="usa-card__footer">
                        <a href="/faq"><button className="usa-button usa-button--big">Read the FAQs</button></a>
                    </div>
                </div>

                <div className="usa-card__container grid-col-3">
                    <div className="usa-card__header">
                        <h3>About CMS Rapid ATO</h3>
                    </div>
                    <div className="usa-card__body">
                        <span>Read more about the inititive</span>
                    </div>
                    <div className="usa-card__footer">
                    <a href="https://ato.cms.gov/"><button className="usa-button usa-button--big">Learn more</button></a>
                    </div>
                </div>
                
                <div className="usa-card__container grid-col-3">
                    <div className="usa-card__header">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="usa-card__body">
                        <span>We look forward to connecting</span>
                    </div>
                    <div className="usa-card__footer">
                    <a href="/contactus"><button className="usa-button usa-button--big">Contact us</button></a>
                    </div>
                </div>
            </div>
        </>
    );
  };

export default Help;
