import React from "react";
import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import RequestService from "../services/RequestService";
import { config } from "../config";
import { MAIN_ROUTES } from "../AppRoutes";

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
    RequestService.post(
      config.backendUrlAuth,
      JSON.stringify({
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      }),
      (response) => {
        sessionStorage.setItem("Token", response.data.token);
        sessionStorage.setItem("Username", response.data.user.username);
        window.location.assign(MAIN_ROUTES.HOME);
      }
    );
  };

  return (
    <div>
      <h1>Sign in</h1>
      <Form data-testid="login_form" onSubmit={loginUser}>
        <Label htmlFor="username">Username</Label>
        <TextInput
          id="username"
          name="username"
          placeholder="Enter Username"
          type="text"
        />
        <Label htmlFor="password">Password</Label>
        <TextInput
          id="password"
          name="password"
          placeholder="Enter Password"
          type="password"
        />
        <Button type="submit">Sign in</Button>
      </Form>
    </div>
  );
};

export default Login;
