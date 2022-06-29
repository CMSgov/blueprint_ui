import { useState, useEffect } from "react";
import Config from "../config";

const Healthcheck = () => {
  const [error, setError] = useState(false);
  const [status, setState] = useState("");
  useEffect(() => {
    if (status === "") {
      fetch(`${Config("backendUrl")}/healthcheck/`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((healthcheck) => {
          return setState(healthcheck.status);
        })
        .catch((error) => {
          return setError(true);
        });
    }
  }, [status, setState]);
  if (error) {
    return <h1>Api healthcheck is not reachable</h1>;
  }
  return (
    <>
      <h1>Api healthcheck status: {status}</h1>
    </>
  );
};
export default Healthcheck;
