import { Button, Form, Label, Radio, TextInput } from "@trussworks/react-uswds";
import { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";
import { config } from "../config";
import RequestService from "../services/RequestService";

const ProjectSetup = () => {
  const [fullNameValidationStatus, setFullNameValidationStatus] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [acronymValidationStatus, setaAcronymValidationStatus] = useState("");
  const [errorAcronym, setErrorAcronym] = useState(false);
  const [errorLocation, setErrorLocation] = useState(false);
  const [errorFisma, setErrorFisma] = useState(false);

  const [project, setProject] = useState(false);
  // setup input references
  const textInputFull = useRef(null);
  const textInputAcronym = useRef(null);
  const radioInputLocationCmsAws = useRef(null);
  const radioInputLocationGovcloud = useRef(null);
  const radioInputLocationAzure = useRef(null);
  const radioInputLocationOther = useRef(null);
  const radioInputLevelLow = useRef(null);
  const radioInputLevelModerate = useRef(null);
  const radioInputLevelHigh = useRef(null);

  function postProjectCreate(formValues) {
    RequestService.post(
      `${config.backendUrl}/projects/`,
      JSON.stringify(formValues),
      (response) => {
        setProject(response.data);
      }
    );
  }

  const formSubmit = () => {
    // Validate and set form post values
    let postVariables = {};
    postVariables["catalog_version"] = "CMS_ARS_3_1";

    if (textInputAcronym.current.value) {
      postVariables["acronym"] = textInputAcronym.current.value;
      setaAcronymValidationStatus("success");
      setErrorAcronym(false);
    } else {
      setaAcronymValidationStatus("error");
      setErrorAcronym(true);
    }

    if (textInputFull.current.value) {
      postVariables["title"] = textInputFull.current.value;
      setFullNameValidationStatus("success");
      setErrorName(false);
    } else {
      setFullNameValidationStatus("error");
      setErrorName(true);
    }

    if (radioInputLocationCmsAws.current.checked) {
      postVariables["location"] = radioInputLocationCmsAws.current.value;
      setErrorLocation(false);
    } else if (radioInputLocationGovcloud.current.checked) {
      postVariables["location"] = radioInputLocationGovcloud.current.value;
      setErrorLocation(false);
    } else if (radioInputLocationAzure.current.checked) {
      postVariables["location"] = radioInputLocationAzure.current.value;
      setErrorLocation(false);
    } else if (radioInputLocationOther.current.checked) {
      postVariables["location"] = radioInputLocationOther.current.value;
      setErrorLocation(false);
    } else {
      setErrorLocation(true);
    }

    if (radioInputLevelLow.current.checked) {
      postVariables["impact_level"] = radioInputLevelLow.current.value;
      setErrorFisma(false);
    } else if (radioInputLevelModerate.current.checked) {
      postVariables["impact_level"] = radioInputLevelModerate.current.value;
      setErrorFisma(false);
    } else if (radioInputLevelHigh.current.checked) {
      postVariables["impact_level"] = radioInputLevelHigh.current.value;
      setErrorFisma(false);
    } else {
      setErrorFisma(true);
    }

    if (
      postVariables["catalog_version"] &&
      postVariables["acronym"] &&
      postVariables["title"] &&
      postVariables["location"] &&
      postVariables["impact_level"]
    ) {
      postProjectCreate(postVariables);
    }
  };

  if (project) {
    localStorage.setItem("project", JSON.stringify(project));
  }

  return (
    <div className="project-setup-page">
      {project && <Navigate to="/project-setup/confirmation" />}
      <h1>Tell us a little about this system</h1>
      <p className="sub-header-text">
        This will help us suggest System Components and an initial control
        baseline.
      </p>
      <Form>
        <span className="bold-text">What is the name of the FISMA system?</span>
        <Label htmlFor="project-full-name">Full name</Label>
        {errorName && (
          <span
            className="usa-error-message"
            id="input-error-message"
            role="alert"
          >
            This field is required.
          </span>
        )}
        <TextInput
          type="text"
          id="project-full-name"
          name="project-full-name"
          validationStatus={fullNameValidationStatus}
          inputRef={textInputFull}
        ></TextInput>

        <Label htmlFor="project-acronym">Acronym</Label>
        {errorAcronym && (
          <span
            className="usa-error-message"
            id="input-error-message"
            role="alert"
          >
            This field is required.
          </span>
        )}
        <TextInput
          type="text"
          id="project-acronym"
          name="project-acronym"
          validationStatus={acronymValidationStatus}
          inputRef={textInputAcronym}
        ></TextInput>
        <br />
        <br />
        <span className="bold-text">
          Where is this system going to be located?
        </span>
        {errorLocation && (
          <span
            className="usa-error-message"
            id="input-error-message"
            role="alert"
          >
            A selection is required.
          </span>
        )}
        <Radio
          tile
          id="radio-location-cms-aws-east-west"
          name="radio-location"
          value="cms_aws"
          label="CMS AWS Commercial East-West"
          inputRef={radioInputLocationCmsAws}
        ></Radio>
        <Radio
          tile
          id="radio-location-cms-aws-govcloud"
          name="radio-location"
          value="govcloud"
          label="CMS AWS GovCloud"
          inputRef={radioInputLocationGovcloud}
        ></Radio>
        <Radio
          tile
          id="radio-location-microsoft-azure"
          name="radio-location"
          value="azure"
          label="Microsoft Azure"
          inputRef={radioInputLocationAzure}
        ></Radio>
        <Radio
          tile
          id="radio-location-other"
          name="radio-location"
          value="other"
          label="Other"
          inputRef={radioInputLocationOther}
        ></Radio>
        <br />
        <span className="bold-text">
          What is the FISMA impact level of this system?
        </span>
        {errorFisma && (
          <span
            className="usa-error-message"
            id="input-error-message"
            role="alert"
          >
            A selection is required.
          </span>
        )}
        <Radio
          tile
          id="radio-fisma-low"
          name="radio-fisma"
          value="low"
          label="Low"
          labelDescription="Data loss less likely to have a serious negative impact CMS's operations and assets."
          inputRef={radioInputLevelLow}
        ></Radio>
        <Radio
          tile
          id="radio-fisma-moderate"
          name="radio-fisma"
          value="moderate"
          label="Moderate"
          labelDescription="Data loss could have a serious negative impact CMS's operations and assets."
          inputRef={radioInputLevelModerate}
        ></Radio>
        <Radio
          tile
          id="radio-fisma-high"
          name="radio-fisma"
          value="high"
          label="High"
          labelDescription="Data loss could have a catastrophic impact CMS's operations and assets."
          inputRef={radioInputLevelHigh}
        ></Radio>
      </Form>
      <Link to={MAIN_ROUTES.HOME}>
        <button className="usa-button usa-button--outline">Back</button>
      </Link>
      <Button type="submit" onClick={formSubmit} className="submit-button">
        Next
      </Button>
    </div>
  );
};

export default ProjectSetup;
