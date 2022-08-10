import React from "react";
import { Link } from "react-router-dom";
import { Form, Label, TextInput, Button } from "@trussworks/react-uswds";
import RequestService from "../services/RequestService";
import { config } from "../config";
import { MAIN_ROUTES } from "../AppRoutes";

const createUser = (e) => {
  e.preventDefault();
  RequestService.post(
    `${config.backendUrl}/users/`,
    JSON.stringify({
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
      passwordConfirm: e.target.elements.passwordConfirm.value,
      firstName: e.target.elements.firstName.value,
      lastName: e.target.elements.lastName.value,
      email: e.target.elements.email.value,
    }),
    (response) => {
      sessionStorage.setItem("Token", response.data.token);
      sessionStorage.setItem("Username", response.data.user.username);
      window.location.assign(MAIN_ROUTES.HOME);
    }
  );
};

const CreateAccount = () => {
  return (
    <div>
      <h1 className="margin-bottom-4">Create account</h1>

      <Form onSubmit={createUser}>
        <p>
          <abbr title="required" className="usa-hint usa-hint--required">
            *
          </abbr>{" "}
          indicates a required field.
        </p>

        <Label htmlFor="username">
          Username{" "}
          <abbr title="required" className="usa-label--required">
            *
          </abbr>
        </Label>
        <TextInput
          id="username"
          name="username"
          placeholder="Username"
          type="text"
          required={true}
        />
        <Label htmlFor="password-create-account">
          Create password{" "}
          <abbr title="required" className="usa-label--required">
            *
          </abbr>
        </Label>
        <TextInput
          id="password-create-account"
          name="password"
          placeholder="Create password"
          type="password"
          required={true}
        />
        <Label htmlFor="password-create-account-confirm">
          Re-type password{" "}
          <abbr title="required" className="usa-label--required">
            *
          </abbr>
        </Label>
        <TextInput
          id="password-create-account-confirm"
          name="passwordConfirm"
          placeholder="Re-type password"
          type="password"
          required={true}
        />
        <Label htmlFor="first-name">First Name</Label>
        <TextInput
          id="first-name"
          name="firstName"
          placeholder="First name"
          type="text"
          required={false}
        />
        <Label htmlFor="last-name">Last Name</Label>
        <TextInput
          id="last-name"
          name="lastName"
          placeholder="Last name"
          type="text"
          required={false}
        />
        <Label htmlFor="email">Email address</Label>
        <TextInput
          id="email"
          name="email"
          placeholder="Email address"
          type="email"
          required={false}
          className="margin-bottom-3"
        />
        <Button type="submit">Create account</Button>
      </Form>

      <p className="margin-top-3">
        Already have an account? <Link to={MAIN_ROUTES.LOGIN}>Sign in</Link>.
      </p>
    </div>
  );
};

export default CreateAccount;
