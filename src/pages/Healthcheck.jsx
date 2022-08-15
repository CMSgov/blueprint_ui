import { useState, useEffect } from "react";
import { config } from "../config";
import RequestService from "../services/RequestService";
import LoadingIndicator from "../atoms/LoadingIndicator";
import ErrorMessage from "../molecules/ErrorMessage";

const ERROR_MESSAGE = "Api healthcheck is not reachable";

const Healthcheck = () => {
  const [status, setStatus] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    RequestService.get(
      `${config.backendUrl}/healthcheck/`,
      (response) => {
        setStatus(response.status);
        setIsLoading(false);
      },
      (err) => {
        setHasError(true);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return <h1>Api healthcheck status: {status}</h1>;
};

export default Healthcheck;
