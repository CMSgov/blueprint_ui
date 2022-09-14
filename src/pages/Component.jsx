import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { isEmpty } from "../utils";
import { getControlData } from "../Helpers";
import { config } from "../config";
import RequestService from "../services/RequestService";

import { ComponentTemplate } from "../templates/ComponentTemplate";
import ErrorMessage from "../molecules/ErrorMessage";
import GlobalState from "../GlobalState";
import AlertToast from "../atoms/AlertToast";
import LoadingIndicator from "../atoms/LoadingIndicator";

const ERROR_MESSAGE = "Error loading component";

const Component = () => {
  const { componentId } = useParams();

  const [selectedControl, setSelectedControl] = useState({});
  const [state, setState] = useContext(GlobalState);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleProjectUpdate = (formValues, path) => {
    RequestService.post(
      `${config.backendUrl}/projects/${path}`,
      JSON.stringify(formValues),
      (response) => {
        toast(AlertToast("success", response.data.message));

        // get updated component data to get the updated list of projects
        // that the component can be added to/removed from
        getUpdatedComponentData();
      },
      (err) => {
        toast(AlertToast("error", "Something went wrong, try again."));
      }
    );
  };

  const getUpdatedComponentData = () => {
    RequestService.get(
      `${config.backendUrl}/components/${componentId}/`,
      (response) => {
        setState((state) => ({ ...state, component: response.data }));
      }
    );
  };

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
          setHasError(true);
          setIsLoading(false);
        }
      );
    }
  }, [componentId, state.component, setState]);

  const handleSelectControl = (controlId) => {
    let control = getControlData(state.component, controlId);
    setSelectedControl(control);
    window.location.hash = "#controls";
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }
  if (hasError) {
    return <ErrorMessage message={ERROR_MESSAGE} />;
  }
  if (state.component && !isEmpty(state.component)) {
    return (
      <ComponentTemplate
        component={state.component}
        selectedControl={selectedControl}
        handleSelectControl={handleSelectControl}
        handleProjectUpdate={handleProjectUpdate}
      />
    );
  }
};

export default Component;
