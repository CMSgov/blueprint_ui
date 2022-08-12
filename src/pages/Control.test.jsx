import { act } from "react-dom/test-utils";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Control from "./Control";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const projectData = {
  id: 21,
  title: "Name Full Test",
  acronym: "NFT",
  catalog_data: {
    label: "AC-01",
    title: "Access Control Policy and Procedures",
    family: "Access Control",
    description: "",
    implementation: "",
    guidance:
      "This control addresses the establishment of policy and procedures for the effective implementation of selected security controls and control enhancements in the AC family. Policy and procedures reflect applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance. Security program policies and procedures at the organization level may make the need for system-specific policies and procedures unnecessary. The policy can be included as part of the general information security policy for organizations or, conversely, can be represented by multiple policies reflecting the complex nature of certain organizations. The procedures can be established for the security program in general and for information systems, if needed. The organizational risk management strategy is a key factor in establishing policy and procedures._x000D_\n_x000D_\nGuidance for systems processing, storing, or transmitting PII (to include PHI):_x000D_\n_x000D_\nAccess Control policies and procedures form the foundation that allows privacy protections to be implemented for the identified uses of personally identifiable information (PII) and protected health information (PHI). Privacy requirements commonly use the terms “adequate security” and “confidentiality” when referring to access controls and other security safeguards for PII. Applied together, these terms signify the need to make risk-based decisions based on the magnitude of harm (to both organizations and individuals) when determining applicable restrictions for PII. For this overlay, refer to the definitions of “adequate security” in OMB Circular A-130, Appendix III, and “confidentiality” in NIST SP 800-37, Rev. 1, Appendix B. These definitions are consistent with Committee for National Security Systems Instruction (CNSSI) No. 4009._x000D_\n_x000D_",
    version: "CMS_ARS_3_1_catalog",
    next_id: "",
  },
  component_data: {
    responsibility: "Hybrid",
    components: {
      inherited: {
        OCISO: {
          description:
            "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Access Control Procedures available for this application.\n  \n  \n Inheritance Statement:\n In accordance with HHS policy, CMS reviews and updates Enterprise security and privacy policies and procedures at least every 3 years, or as necessary. CMS Access Control policy and procedures are listed below along with the corresponding URL:\n  \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.1: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n  \n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 36)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n  3.   CMS Technical Reference Architecture (TRA) Release I Volume II Network Services p125. Access Control and Identify Management  Chapter \n  \n https://share.cms.gov/office/ois/CTO/SitePages/TRA.aspx  (Access restricted)",
          responsibility: ["Hybrid"],
          provider: "Yes",
        },
        AWS: {
          description:
            "CMS Cloud is responsible for an Access Control Policy covering GSS Accounts.\n\nApplication teams are responsible for an Access Control Policy covering all application related accounts.",
          responsibility: ["Hybrid"],
          provider: "Yes",
        },
      },
      private: {},
    },
  },
};

beforeEach(() => {
  jest.restoreAllMocks();
});
afterAll(() => {
  jest.restoreAllMocks();
});

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when project data is successfully returned", async () => {
  let mock = new MockAdapter(axios);
  const controlId = "ac-1";
  mock
    .onGet(
      `${config.backendUrl}/projects/${projectData.id}/controls/${controlId}/`
    )
    .reply(200, projectData);

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectData.id}/controls/${controlId}`]}
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
  const expectedTitle = `${projectData.title} (${projectData.acronym})`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(expectedTitle);
    // checks that project template has rendered
    expect(screen.getByTestId("project_header_subtitle")).toHaveTextContent(
      "System Control: AC-01 Access Control Policy and Procedures"
    );
  });
});

test("renders the ErrorMessage when projects data is NOT successfully returned", async () => {
  const nonExistentProjectId = 0;
  const controlId = "ac-1";
  let mock = new MockAdapter(axios);
  mock
    .onGet(
      `${config.backendUrl}/projects/${nonExistentProjectId}/controls/${controlId}`
    )
    .reply(401);

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
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});

test("renders the the page and marks control as completed and clicks next", async () => {
  let mock = new MockAdapter(axios);
  const controlId = "ac-1";
  mock
    .onGet(
      `${config.backendUrl}/projects/${projectData.id}/controls/${controlId}/`
    )
    .reply(200, projectData);
  mock
    .onPost(
      `${config.backendUrl}/projects/${projectData.id}/controls/${controlId}/`
    )
    .reply(200, projectData);

  render(
    <MemoryRouter
      initialEntries={[`/projects/${projectData.id}/controls/${controlId}`]}
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
  const expectedTitle = `${projectData.title} (${projectData.acronym})`;
  await waitFor(() => {
    screen.getByText(expectedTitle);
  });

  const checkbox = screen.getByLabelText("Mark as complete");
  fireEvent.click(checkbox);
  fireEvent.click(screen.getByRole("button", { name: "Save & next" }));
});
