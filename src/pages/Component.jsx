import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import { getControlData } from "../Helpers";
import Config from "../config";
import RequestService from "../services/RequestService";

import { ComponentTemplate } from "../templates/ComponentTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import LoadingIndicator from "../atoms/LoadingIndicator";

const ERROR_MESSAGE = "Error loading component";

const Component = () => {
  const { componentId } = useParams();

  const [selectedControl, setSelectedControl] = useState(false);
  const [state, setState] = useContext(GlobalState);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let component = useMemo(() => state.component || {}, [state]);

  useEffect(() => {
    if (component.id !== parseInt(componentId)) {
      RequestService.get(
        `${Config("backendUrl")}/components/${componentId}/`,
        (response) => {
          setState((state) => ({ ...state, component: response.data }));
          setIsLoading(false);
        },
        (err) => {
          setHasError(true);
          setIsLoading(false);
        }
      );
    }
  }, [componentId, component, setState]);

  const getControl = (controlId) => {
    let control = getControlData(component, controlId);
    setSelectedControl(control);
    window.location.hash = "#controls";
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError || isEmpty(component)) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  return (
    <ComponentTemplate
      component={component}
      controlText={selectedControl}
      catalogData={getControl}
    />
  );
};

export default Component;
