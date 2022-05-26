const ContactUs = () => {
    return (
    <>
        <h1>Contact Us</h1>
        <p>Complete this form or email us directly at <a href="mailto:rapidato@cms.hhs.gov">rapidato@cms.hhs.gov</a></p>
        {/* @TODO: need to change the form action to submit to yet to be determined endpoint for storage in the DB and email */}
        <form action="mailto:rapidato@cms.hhs.gov" method="post" encType="text/plain" className="usa-form usa-form--large">
            <label className="usa-label" htmlFor="fname">First name <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="text" id="fname" name="fname" required />
            <label className="usa-label" htmlFor="lname">Last name <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="text" id="lname" name="lname" required />
            <label className="usa-label" htmlFor="org">Organization/Department <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="text" id="org" name="org" required />
            <label className="usa-label" htmlFor="email">Email <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="email" id="email" name="email" required />
            <label className="usa-label" htmlFor="phone">Phone number <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="phone" id="phone" name="phone" required />
            <label className="usa-label" htmlFor="comment">Please enter your questions, comments, or feedback and we will be in touch soon <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <textarea id="comment" name="comment" required ></textarea><br />
            <input type="submit" value="Submit" className="usa-button usa-button--big" />
        </form>
    </>
    );
  };
  
export default ContactUs;
