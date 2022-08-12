import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ComponentLibrary from "./ComponentLibrary";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const pageData = [
  {
    id: 24,
    title: "Cypress Created Project 1658944628191 private",
    description:
      "Cypress Created Project 1658944628191 default system component",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "12bac8d6-ac07-42cd-8dc2-7212c350c7e4",
        metadata: {
          title: "Cypress Created Project 1658944628191 private",
          version: "unknown",
          published: "2022-07-27T16:30:59.625777+00:00",
          "last-modified": "2022-07-27T16:30:59.626263+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "03a745ca-095f-4c72-97a7-a3664a18b14a",
            title: "Cypress Created Project 1658944628191 private",
            description: "Cypress Created Project 1658944628191 private",
            "control-implementations": [
              {
                uuid: "4f46972f-12be-43b9-a193-58f1de856b05",
                source:
                  "https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json",
                description: "cms ars 3.1",
                "implemented-requirements": [],
              },
            ],
          },
        ],
      },
    },
    component_file: null,
    controls_count: 0,
  },
  {
    id: 25,
    title: "Cypress Created Project 1658944639342 private",
    description:
      "Cypress Created Project 1658944639342 default system component",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "aa7eef77-5552-4fa4-989e-13fa54e22d47",
        metadata: {
          title: "Cypress Created Project 1658944639342 private",
          version: "unknown",
          published: "2022-07-27T16:30:59.625777+00:00",
          "last-modified": "2022-07-27T16:30:59.626263+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "7fbb2e7d-bcbb-4976-9d77-f76eb228b955",
            title: "Cypress Created Project 1658944639342 private",
            description: "Cypress Created Project 1658944639342 private",
            "control-implementations": [
              {
                uuid: "b3654e5a-0ede-4849-ab92-3638aef948f8",
                source:
                  "https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json",
                description: "cms ars 3.1",
                "implemented-requirements": [],
              },
            ],
          },
        ],
      },
    },
    component_file: null,
    controls_count: 0,
  },
  {
    total_item_count: 2,
  },
];

test("renders the pageTemplate when page data is successfully returned", async () => {
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/components/search/`).reply(200, pageData);
  mock.onGet(`${config.backendUrl}/components/types/`).reply(200, []);
  mock.onGet(`${config.backendUrl}/catalogs/`).reply(200, []);

  render(
    <MemoryRouter initialEntries={[`/components`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="components" element={<ComponentLibrary />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Component Library");
  });
});

test.skip("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  const nonExistentId = 0;
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/components/search/`).reply(401);

  render(
    <MemoryRouter initialEntries={[`/components`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="components" element={<ComponentLibrary />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Error loading components");
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});
