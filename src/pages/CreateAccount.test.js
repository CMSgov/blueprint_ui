import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { config } from "../config";
import CreateAccount from "./CreateAccount";
import RequestService from "../services/RequestService";

test("filled in form data is used to make api request", async () => {
  const username = "admin";
  const password = "password";
  const passwordConfirm = "password";
  const firstName = "Fname";
  const lastName = "Lname";
  const email = "email@email.test";

  RequestService.post = jest.fn();

  render(
    <MemoryRouter>
      <CreateAccount />
    </MemoryRouter>
  );

  // fill out form and click create account button
  const usernameInput = screen.getByPlaceholderText("Username");
  fireEvent.change(usernameInput, { target: { value: username } });
  const passwordInput = screen.getByPlaceholderText("Create password");
  fireEvent.change(passwordInput, { target: { value: password } });
  const passwordConfirmInput = screen.getByPlaceholderText("Re-type password");
  fireEvent.change(passwordConfirmInput, {
    target: { value: passwordConfirm },
  });
  const firstNameInput = screen.getByPlaceholderText("First name");
  fireEvent.change(firstNameInput, { target: { value: firstName } });
  const lastNameInput = screen.getByPlaceholderText("Last name");
  fireEvent.change(lastNameInput, { target: { value: lastName } });
  const emailInput = screen.getByPlaceholderText("Email address");
  fireEvent.change(emailInput, { target: { value: email } });
  const signInButton = screen.getByRole("button", { name: "Create account" });
  fireEvent.click(signInButton);

  const expectedRequestUrl = `${config.backendUrl}/users/`;
  const expectedRequestBody = `{\"username\":"${username}",\"password\":"${password}",\"passwordConfirm\":"${passwordConfirm}",\"firstName\":"${firstName}",\"lastName\":"${lastName}",\"email\":"${email}"}`;

  await waitFor(() => {
    expect(RequestService.post).toHaveBeenCalledWith(
      expectedRequestUrl,
      expectedRequestBody,
      expect.anything()
    );
  });
});
