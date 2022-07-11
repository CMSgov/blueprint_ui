import {
  Alert,
  Button,
  Form,
  Label,
  Radio,
  TextInput,
} from "@trussworks/react-uswds";
import { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { MAIN_ROUTES } from "../AppRoutes";
import Config from "../config";

const ProjectSetup = () => {
  const [fullNameValidationStatus, setFullNameValidationStatus] = useState("");
  const [acronymValidationStatus, setaAcronymValidationStatus] = useState("");
  const [error, setError] = useState(false);
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
    fetch(`${Config("backendUrl")}/projects/`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((project) => {
        if (project !== undefined && project.id !== undefined) {
          return setProject(project);
        } else {
          return setError(project);
        }
      })
      .catch((error) => {
        return setError(error);
      });
  }

  const formSubmit = () => {
    // Validate and set form post values
    let postVariables = {};
    postVariables["creator"] = 1; // @TODO: This should be the current userId when we have it
    postVariables["catalog"] = 1; // @TODO: This should be ARS 3.1 catalog or list of catalogs to choose from

    if (textInputAcronym.current.value) {
      postVariables["acronym"] = textInputAcronym.current.value;
      setaAcronymValidationStatus("success");
    } else {
      setaAcronymValidationStatus("error");
    }

    if (textInputFull.current.value) {
      postVariables["title"] = textInputFull.current.value;
      setFullNameValidationStatus("success");
    } else {
      setFullNameValidationStatus("error");
    }

    if (radioInputLocationCmsAws.current.checked) {
      postVariables["location"] = radioInputLocationCmsAws.current.value;
    } else if (radioInputLocationGovcloud.current.checked) {
      postVariables["location"] = radioInputLocationGovcloud.current.value;
    } else if (radioInputLocationAzure.current.checked) {
      postVariables["location"] = radioInputLocationAzure.current.value;
    } else if (radioInputLocationOther.current.checked) {
      postVariables["location"] = radioInputLocationOther.current.value;
    }

    if (radioInputLevelLow.current.checked) {
      postVariables["impact_level"] = radioInputLevelLow.current.value;
    } else if (radioInputLevelModerate.current.checked) {
      postVariables["impact_level"] = radioInputLevelModerate.current.value;
    } else if (radioInputLevelHigh.current.checked) {
      postVariables["impact_level"] = radioInputLevelHigh.current.value;
    }

    if (
      postVariables["creator"] &&
      postVariables["catalog"] &&
      postVariables["acronym"] &&
      postVariables["title"] &&
      postVariables["location"] &&
      postVariables["impact_level"]
    ) {
      postProjectCreate(postVariables);
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <>
      {project && <Navigate to="/project-setup/confirmation" />}
      <h1>Tell us a little about this system</h1>
      <p className="sub-header-text">
        This will help us suggest System Components and an initial control
        baseline.
      </p>
      <Form>
        {error && <Alert type="error">{error}</Alert>}
        <span className="bold-text">What is the name of the FISMA system?</span>
        <Label htmlFor="project-full-name">Full name</Label>
        <TextInput
          type="text"
          id="project-full-name"
          name="project-full-name"
          validationStatus={fullNameValidationStatus}
          inputRef={textInputFull}
        ></TextInput>

        <Label htmlFor="project-acronym">Acronym</Label>
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
      <Button type="submit" onClick={formSubmit} className="top-space-40">
        Next
      </Button>
    </>
  );
};

export default ProjectSetup;
