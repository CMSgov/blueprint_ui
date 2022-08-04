import React, { useContext } from "react";
import { Button, Form, TextInput } from "@trussworks/react-uswds";
import AuthContext from "../AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Login</h1>
      {/* <Form>
        <TextInput
          type="text"
          name="username"
          placeholder="Enter Username" 
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Enter Password" 
        />
        <Button type="submit" onClick={loginUser} className="top-space-40">
          Submit
        </Button>
      </Form> */}

      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
