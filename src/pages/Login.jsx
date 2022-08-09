import React, { useContext } from "react";
import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import AuthContext from "../AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Sign in</h1>
      <Form onSubmit={loginUser}>
        <Label htmlFor="username">Username</Label>
        <TextInput
          type="text"
          label="Username"
          name="username"
          placeholder="Enter Username"
        />
        <Label htmlFor="username">Password</Label>
        <TextInput
          type="password"
          label="Password"
          name="password"
          placeholder="Enter Password"
        />
        <Button type="submit">Sign in</Button>
      </Form>
    </div>
  );
};

export default Login;
