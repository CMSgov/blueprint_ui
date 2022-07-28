import { useState, useEffect } from "react";
import Config from "../config";
import RequestService from "../services/RequestService";

const Healthcheck = () => {
  const [hasError, setHasError] = useState(false);
  const [status, setStatus] = useState();

  useEffect(() => {
    RequestService.get(
      `${Config("backendUrl")}/healthcheck/`,
      (response) => {
        setStatus(response.status);
      },
      (err) => {
        setHasError(true);
      }
    );
  }, []);

  if (hasError) {
    return <h1>Api healthcheck is not reachable</h1>;
  }
  return <h1>Api healthcheck status: {status}</h1>;
};

export default Healthcheck;
