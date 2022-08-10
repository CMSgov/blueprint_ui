import { useState, useEffect } from "react";
import { config } from "../config";
import RequestService from "../services/RequestService";

const Healthcheck = () => {
  const [status, setStatus] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    RequestService.get(
      `${config.backendUrl}/healthcheck/`,
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
