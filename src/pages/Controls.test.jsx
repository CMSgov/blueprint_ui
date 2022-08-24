import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ProjectControls from "./Controls";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import { GlobalStateProvider } from "../GlobalState";
import Project from "./Project";

const projectData = {
  title: "Test Project One",
  acronym: "TPO",
  impact_level: "low",
  id: 1,
};

const controlData = {
  count: 323,
  next: "/api/projects/1/controls/?page=2",
  previous: null,
  results: [
    {
      status: "completed",
      control: {
        id: 1,
        control_id: "ac-1",
        control_label: "AC-01",
        sort_id: "ac-01",
        title: "Access Control Policy and Procedures",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 2,
        control_id: "ac-2",
        control_label: "AC-02",
        sort_id: "ac-02",
        title: "Account Management",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "completed",
      control: {
        id: 3,
        control_id: "ac-2.1",
        control_label: "AC-02(01)",
        sort_id: "ac-02(01)",
        title: "Automated Information System Account Management",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "completed",
      control: {
        id: 4,
        control_id: "ac-2.2",
        control_label: "AC-02(02)",
        sort_id: "ac-02(02)",
        title: "Removal of Temporary/Emergency Accounts",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 5,
        control_id: "ac-2.3",
        control_label: "AC-02(03)",
        sort_id: "ac-02(03)",
        title: "Disable Inactive Accounts",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 6,
        control_id: "ac-2.4",
        control_label: "AC-02(04)",
        sort_id: "ac-02(04)",
        title: "Automated Audit Actions",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 7,
        control_id: "ac-3",
        control_label: "AC-03",
        sort_id: "ac-03",
        title: "Access Enforcement",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "incomplete",
      control: {
        id: 8,
        control_id: "ac-4",
        control_label: "AC-04",
        sort_id: "ac-04",
        title: "Information Flow Enforcement",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 9,
        control_id: "ac-5",
        control_label: "AC-05",
        sort_id: "ac-05",
        title: "Separation of Duties",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "incomplete",
      control: {
        id: 10,
        control_id: "ac-6",
        control_label: "AC-06",
        sort_id: "ac-06",
        title: "Least Privilege",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 11,
        control_id: "ac-6.1",
        control_label: "AC-06(01)",
        sort_id: "ac-06(01)",
        title: "Authorize Access to Security Functions",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "incomplete",
      control: {
        id: 12,
        control_id: "ac-6.2",
        control_label: "AC-06(02)",
        sort_id: "ac-06(02)",
        title: "Non-Privileged Access for non-security Functions",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 13,
        control_id: "ac-6.5",
        control_label: "AC-06(05)",
        sort_id: "ac-06(05)",
        title: "Privileged Accounts",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 14,
        control_id: "ac-6.9",
        control_label: "AC-06(09)",
        sort_id: "ac-06(09)",
        title: "Auditing Use of Privileged Functions",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "incomplete",
      control: {
        id: 15,
        control_id: "ac-6.10",
        control_label: "AC-06(10)",
        sort_id: "ac-06(10)",
        title:
          "Prohibit Non-Privileged Users from Executing Privileged Functions",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 16,
        control_id: "ac-7",
        control_label: "AC-07",
        sort_id: "ac-07",
        title: "Unsuccessful Logon Attempts",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 17,
        control_id: "ac-8",
        control_label: "AC-08",
        sort_id: "ac-08",
        title: "System Use Notification",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 18,
        control_id: "ac-11",
        control_label: "AC-11",
        sort_id: "ac-11",
        title: "Session Lock",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 19,
        control_id: "ac-11.1",
        control_label: "AC-11(01)",
        sort_id: "ac-11(01)",
        title: "Pattern-Hiding Displays",
        catalog: 1,
      },
      project: 1,
    },
    {
      status: "not_started",
      control: {
        id: 20,
        control_id: "ac-12",
        control_label: "AC-12",
        sort_id: "ac-12",
        title: "Session Termination",
        catalog: 1,
      },
      project: 1,
    },
  ],
};

test("Check page header values", async () => {
  let mock = new MockAdapter(axios);
  mock
    .onGet(`${config.backendUrl}/projects/${projectData.id}/`)
    .reply(200, projectData);

  render(
    <MemoryRouter initialEntries={[`/projects/${projectData.id}/controls`]}>
      <GlobalStateProvider>
        <Routes>
          <Route path="projects/:id/controls" element={<ProjectControls />} />
        </Routes>
      </GlobalStateProvider>
    </MemoryRouter>
  );
  screen.getByTestId("loading_indicator");
  const expectedTitle = `${projectData.title} (${projectData.acronym})`;
  await waitFor(() => {
    screen.getByText(expectedTitle);
  });
});
