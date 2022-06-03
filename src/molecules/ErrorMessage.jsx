import React from "react";

const Error = ({ message }) => (
  <div data-testid="error_message">
    <h1>Error</h1>
    {message}
  </div>
);

export default Error;
