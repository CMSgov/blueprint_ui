const ContactUs = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        Complete this form or email us directly at{" "}
        <a href="mailto:rapidato@cms.hhs.gov">rapidato@cms.hhs.gov</a>
      </p>
      <form
        action="mailto:rapidato@cms.hhs.gov"
        method="post"
        enctype="text/plain"
      >
        <label for="fname">First name</label>
        <input type="text" id="fname" name="fname" required />
        <br />
        <label for="lname">Last name</label>
        <input type="text" id="lname" name="lname" required />
        <br />
        <label for="org">Organization/Department</label>
        <input type="text" id="org" name="org" required />
        <br />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label for="phone">Phone number</label>
        <input type="phone" id="phone" name="phone" required />
        <br />
        <label for="comment">
          Please enter your questions, comments, or feedback and we will be in
          touch soon
        </label>
        <input type="textarea" id="comment" name="comment" required />
        <br />
        <input
          type="submit"
          value="Submit"
          className="usa-button usa-button--big"
        />
      </form>
    </>
  );
};

export default ContactUs;
