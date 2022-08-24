import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { isEmpty } from "../utils";
import { getControlData } from "../Helpers";
import { config } from "../config";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!state.component || state.component.id !== parseInt(componentId)) {
      setIsLoading(true);
      RequestService.get(
        `${config.backendUrl}/components/${componentId}/`,
        (response) => {
          setState((state) => ({ ...state, component: response.data }));
          setIsLoading(false);
        },
        (err) => {
          setIsLoading(false);
        }
      );
    }
  }, [componentId, state, setState]);

  const getControl = (controlId) => {
    let control = getControlData(state.component, controlId);
    setSelectedControl(control);
    window.location.hash = "#controls";
  };

  if (isLoading) {
    console.log("isLoading state displayed");
    return <LoadingIndicator />;
  } else if (state.component && !isEmpty(state.component)) {
    console.log("template displayed");
    return (
      <ComponentTemplate
        component={state.component}
        controlText={selectedControl}
        catalogData={getControl}
      />
    );
  } else {
    console.log("error state displayed");
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
};

export default Component;
