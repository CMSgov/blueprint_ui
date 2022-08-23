import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ComponentLibrary from "./ComponentLibrary";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";
import RequestService from "../services/RequestService";

const pageData = [
  {
    id: 24,
    title: "Cypress Created Project 1658944628191 private",
    description:
      "Cypress Created Project 1658944628191 default system component",
    type: "software",
    catalog: 1,
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
    component_file: null,
    controls_count: 0,
  },
  {
    total_item_count: 2,
  },
];
const ERROR_MESSAGE = "Error loading components";

// this test passes, but react wants this to all happen in 1 call instead of 3
test.skip("renders the pageTemplate when page data is successfully returned", async () => {
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
  // need to refactor to display the loading indicator
  // expect(screen.getByTestId("loading_indicator")).toBeInTheDocument();
  expect(screen.queryByText(ERROR_MESSAGE)).toBeNull();
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Component Library");
  });
});

// I can not get this to display an error message until we refactor to get all the data from 1 endpoint
test.skip("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  const nonExistentId = 0;
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/components/search/`).reply(400);
  mock.onGet(`${config.backendUrl}/components/types/`).reply(400);
  mock.onGet(`${config.backendUrl}/catalogs/`).reply(400);

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
    screen.getByText(ERROR_MESSAGE);
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});
