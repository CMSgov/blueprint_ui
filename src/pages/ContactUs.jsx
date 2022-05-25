const ContactUs = () => {
    return (
    <>
        <h1>Contact Us</h1>
        <p>Complete this form or email us directly at <a href="mailto:rapidato@cms.hhs.gov">rapidato@cms.hhs.gov</a></p>
        {/* @TODO: need to change the form action to submit to yet to be determined endpoint for storage in the DB and email */}
        <form action="mailto:rapidato@cms.hhs.gov" method="post" enctype="text/plain" className="usa-form usa-form--large">
            <label className="usa-label" for="fname">First name <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="text" id="fname" name="fname" required />
            <label className="usa-label" for="lname">Last name <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="text" id="lname" name="lname" required />
            <label className="usa-label" for="org">Organization/Department <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="text" id="org" name="org" required />
            <label className="usa-label" for="email">Email <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="email" id="email" name="email" required />
            <label className="usa-label" for="phone">Phone number <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <input className="usa-input" type="phone" id="phone" name="phone" required />
            <label className="usa-label" for="comment">Please enter your questions, comments, or feedback and we will be in touch soon <abbr title="required" className="usa-hint usa-hint--required">*</abbr></label>
            <textarea id="comment" name="comment" required ></textarea><br />
            <input type="submit" value="Submit" className="usa-button usa-button--big" />
        </form>
    </>
    );
  };
  
export default ContactUs;
