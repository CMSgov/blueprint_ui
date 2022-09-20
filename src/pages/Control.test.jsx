import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Control from "./Control";
import axios from "axios";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const projectData = {
  project: {
    id: 21,
    title: "Name Full Test",
    acronym: "NFT",
    private_component: 50,
  },
  catalog_data: {
    label: "AC-01",
    title: "Access Control Policy and Procedures",
    family: "Access Control",
    description: "This is the coolest control.",
    implementation: "We used the thing.",
    guidance: "Do the thing right.",
    version: "CMS_ARS_3_1_catalog",
    next_id: "zz-99",
  },
  component_data: {
    responsibility: "Hybrid",
    components: {
      inherited: {
        OCISO: {
          description: "This is a hybrid control.",
          responsibility: "Hybrid",
          provider: "Yes",
        },
        AWS: {
          description: "CMS Cloud is responsible",
          responsibility: "Hybrid",
          provider: "Yes",
        },
      },
      private: {},
    },
  },
  control: {
    id: 100,
    control_id: "ac-1",
    status: "not_started",
  },
};

const projectDataNextControl = {
  project: {
    id: 99,
    title: "Next Control",
    acronym: "NEXT",
    private_component: 50,
  },
  catalog_data: {
    label: "AC-02",
    title: "Access Control Policy and Procedures",
    family: "Access Control",
    description: "",
    implementation: "",
    guidance: "Do the thing right.",
    version: "CMS_ARS_3_1_catalog",
    next_id: "",
  },
  component_data: {
    responsibility: "Hybrid",
    components: {
      inherited: {},
      private: {},
    },
  },
  control: {
    id: 101,
    status: "not_started",
  },
};

jest.mock("axios");

beforeEach(() => {
  jest.restoreAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when data is successfully returned", async () => {
  const controlId = "ac-1";
  const projectId = projectData.project.id;
  const getResponse = { status: 200, data: projectData };
  axios.get.mockImplementation(() => Promise.resolve(getResponse));

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectId}/controls/${controlId}`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  screen.getByTestId("loading_indicator");

  const expectedTitle = `${projectData.project.title} (${projectData.project.acronym})`;
  await waitFor(() => {
    // displays data
    screen.getByText(expectedTitle);
  });
});

test("renders the ErrorMessage when projects data is NOT successfully returned", async () => {
  const nonExistentProjectId = 0;
  const controlId = "ac-1";
  const errorResponse = {
    response: {
      message: "Request failed with status code 400",
      code: "ERR_BAD_REQUEST",
      status: 400,
    },
  };
  axios.get.mockImplementation(() => Promise.reject(errorResponse));

  render(
    <MemoryRouter
      initialEntries={[
        `/projects/${nonExistentProjectId}/controls/${controlId}`,
      ]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Error loading project control");
  });

  // checks that ErrorMessage component has rendered
  const errorMessage = screen.getByTestId("error_message");
  expect(within(errorMessage).getByRole("heading")).toHaveTextContent("Error");
});

test("displays page data as expected", async () => {
  const dataToRender = {
    project: {
      id: 21,
      title: "Name Full Test",
      acronym: "NFT",
    },
    catalog_data: {
      label: "AC-01",
      title: "Access Control Policy and Procedures",
      family: "Access Control",
      description: "This is the coolest control",
      implementation: "the thing is done",
      guidance: "Do the thing right.",
      version: "CMS_ARS_3_1_catalog",
      next_id: "zz-99",
    },
    component_data: {
      responsibility: "Hybrid",
      components: {
        inherited: {
          OCISO: {
            description: "This is a hybrid control.",
            responsibility: "Hybrid",
            provider: "Yes",
          },
        },
        private: {
          description: null,
        },
      },
    },
    control: {
      id: 100,
      status: "not_started",
    },
  };
  const controlId = "ac-1";
  const projectId = dataToRender.project.id;
  const getResponse = { status: 200, data: dataToRender };
  axios.get.mockImplementation(() => Promise.resolve(getResponse));

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectId}/controls/${controlId}`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  const expectedTitle = `${dataToRender.project.title} (${dataToRender.project.acronym})`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(expectedTitle);
  });

  const expectedSubtitle = `System Control: ${dataToRender.catalog_data.label} ${dataToRender.catalog_data.title}`;
  expect(screen.getByTestId("project_header_subtitle")).toHaveTextContent(
    expectedSubtitle
  );

  screen.getByText(dataToRender.catalog_data.version);
  screen.getByText(dataToRender.catalog_data.family);
  screen.getByText(dataToRender.catalog_data.description);
  screen.getByText(dataToRender.catalog_data.description);
  screen.getByText(dataToRender.catalog_data.implementation);
  screen.getByText(dataToRender.catalog_data.guidance);

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(
    dataToRender.component_data.responsibility
  );

  const inheritedComponents = screen.getByTestId(
    "accordionItem_inherited_narratives"
  );
  expect(inheritedComponents).toHaveTextContent(
    dataToRender.component_data.components.inherited.OCISO.description
  );
});

test("save and next button makes patch calls and directs user to next control page", async () => {
  const controlLabel = "ac-1";
  const controlId = projectData.control.id;
  const controlIdName = projectData.control.control_id;
  const projectId = projectData.project.id;
  const privateComponentId = projectData.project.private_component;

  const getResponse = { status: 200, data: projectData };
  const nextControlGetResponse = { status: 200, data: projectDataNextControl };
  const patchResponse = { status: 200, data: "Success" };

  const mockGet = jest.spyOn(axios, "get");
  const mockPatch = jest.spyOn(axios, "patch");

  mockGet.mockImplementationOnce(() => Promise.resolve(getResponse)); // get initial control data
  mockGet.mockImplementationOnce(() => Promise.resolve(nextControlGetResponse)); // get control data for next control page
  mockPatch.mockImplementation(() => Promise.resolve(patchResponse));

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectId}/controls/${controlLabel}`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  // initial control page loads
  const expectedTitle = `${projectData.project.title} (${projectData.project.acronym})`;
  await waitFor(() => {
    screen.getByText(expectedTitle);
  });

  // click save and next button
  fireEvent.click(screen.getByRole("button", { name: "Save & next" }));

  // first patch request is made to update private component
  const expectedFirstRequestUrl = `${config.backendUrl}/components/${privateComponentId}/implemented-requirements/`;
  const expectedFirstRequestBody = `{"catalog_version":"CMS_ARS_3_1","controls":["${controlIdName}"],"action":"remove"}`;
  const expectedFirstRequestHeaders = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "TOKEN null",
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  expect(mockPatch).toHaveBeenNthCalledWith(
    1,
    expectedFirstRequestUrl,
    expectedFirstRequestBody,
    expectedFirstRequestHeaders
  );

  // second patch request is made to update project control status
  const expectedNewStatus = "incomplete";
  const expectedSecondRequestUrl = `${config.backendUrl}/projects/${projectId}/controls/${controlLabel}/`;
  const expectedSecondRequestBody = `{"project_id":${projectId},"control_id":${controlId},"status":"${expectedNewStatus}"}`;
  const expectedSecondRequestHeaders = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "TOKEN null",
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  await waitFor(() => {
    expect(mockPatch).toHaveBeenNthCalledWith(
      2,
      expectedSecondRequestUrl,
      expectedSecondRequestBody,
      expectedSecondRequestHeaders
    );
  });

  // next page loads with next control data
  const expectedNextTitle = `${projectDataNextControl.project.title} (${projectDataNextControl.project.acronym})`;
  await waitFor(() => {
    screen.getByText(expectedNextTitle);
  });
});

test("can mark a control complete", async () => {
  const controlLabel = "ac-1";
  const controlId = projectData.control.id;
  const projectId = projectData.project.id;

  const getResponse = { status: 200, data: projectData };
  const nextControlGetResponse = { status: 200, data: projectDataNextControl };
  const patchResponse = { status: 200, data: "Success" };

  const mockGet = jest.spyOn(axios, "get");
  const mockPatch = jest.spyOn(axios, "patch");

  mockGet.mockImplementationOnce(() => Promise.resolve(getResponse)); // get initial control data
  mockGet.mockImplementationOnce(() => Promise.resolve(nextControlGetResponse)); // get control data for next control page
  mockPatch.mockImplementation(() => Promise.resolve(patchResponse));

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectId}/controls/${controlLabel}`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  // initial control page loads
  const expectedTitle = `${projectData.project.title} (${projectData.project.acronym})`;
  await waitFor(() => {
    screen.getByText(expectedTitle);
  });

  // check off mark as complete box
  fireEvent.click(screen.getByText("Mark as complete"));
  // click save and next button
  fireEvent.click(screen.getByRole("button", { name: "Save & next" }));

  // patch request to update control status made
  const expectedNewStatus = "completed";
  const expectedRequestUrl = `${config.backendUrl}/projects/${projectId}/controls/${controlLabel}/`;
  const expectedRequestBody = `{"project_id":${projectId},"control_id":${controlId},"status":"${expectedNewStatus}"}`;
  const expectedRequestHeaders = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "TOKEN null",
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  await waitFor(() => {
    expect(mockPatch).toHaveBeenNthCalledWith(
      2, // second patch request made on the page is to update control status
      expectedRequestUrl,
      expectedRequestBody,
      expectedRequestHeaders
    );
  });

  // next page loads with next control data
  const expectedNextTitle = `${projectDataNextControl.project.title} (${projectDataNextControl.project.acronym})`;
  await waitFor(() => {
    screen.getByText(expectedNextTitle);
  });
});

test("completed control renders with checkbox already checked", async () => {
  const controlLabel = "ac-1";
  const dataToRender = Object.assign(projectData);
  dataToRender.status = "completed";
  const projectId = dataToRender.project.id;

  const getResponse = { status: 200, data: dataToRender };
  const mockGet = jest.spyOn(axios, "get");
  mockGet.mockImplementationOnce(() => Promise.resolve(getResponse));

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectId}/controls/${controlLabel}`]}
    >
      <GlobalStateProvider>
        <Routes>
          <Route
            path="projects/:id/controls/:controlId"
            element={<Control />}
          />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    const checkbox = screen.getByLabelText("Mark as complete");
    expect(checkbox).toBeChecked();
  });
});
