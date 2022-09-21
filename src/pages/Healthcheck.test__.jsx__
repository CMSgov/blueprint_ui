import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Healthcheck from "./Healthcheck";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";

const pageData = { content: "Healthy" };

test("renders the LoadingIcon when waiting for data, then renders the pageTemplate when page data is successfully returned", async () => {
  let mock = new MockAdapter(axios);
  const status = 200;
  mock.onGet(`${config.backendUrl}/healthcheck/`).reply(200, pageData);

  render(
    <MemoryRouter initialEntries={[`/healthcheck`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="healthcheck" element={<Healthcheck />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  screen.getByTestId("loading_indicator");
  const expectedTitle = `Api healthcheck status: ${status}`;
  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText(expectedTitle);
  });
});

test("renders the ErrorMessage when page data is NOT successfully returned", async () => {
  let mock = new MockAdapter(axios);
  mock.onGet(`${config.backendUrl}/healthcheck/`).reply(500);

  render(
    <MemoryRouter initialEntries={[`/healthcheck`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="healthcheck" element={<Healthcheck />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );

  await waitFor(() => {
    // ensures component has finished running async code and has rendered data
    screen.getByText("Api healthcheck is not reachable");
    // checks that ErrorMessage component has rendered
    const errorMessage = screen.getByTestId("error_message");
    expect(within(errorMessage).getByRole("heading")).toHaveTextContent(
      "Error"
    );
  });
});
