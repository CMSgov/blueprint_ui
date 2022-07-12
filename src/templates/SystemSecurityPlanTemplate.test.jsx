import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SystemSecurityPlanTemplate from "./SystemSecurityPlanTemplate";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "12",
  }),
}));

const projectData = {
  title: "Test Project",
  acronym: "TP",
  id: 12,
  impact_level: "low",
};

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test("renders page", () => {
  render(<SystemSecurityPlanTemplate project={projectData} />, {
    wrapper: MemoryRouter,
  });
  const h2 = screen.getByText("System Security Plan Summary");
  expect(h2).toBeInTheDocument();
  const tableHeader1 = screen.getByText("Documents");
  expect(tableHeader1).toBeInTheDocument();
  const tableHeader2 = screen.getByText("Description");
  expect(tableHeader2).toBeInTheDocument();
  const tableHeader3 = screen.getByText("Downloads");
  expect(tableHeader3).toBeInTheDocument();
  const link1 = screen.getByText("CFACTS (CSV)");
  expect(link1).toBeInTheDocument();
  const link2 = screen.getByText("Word (DOCX)");
  expect(link2).toBeInTheDocument();
  const link3 = screen.getByText("OSCAL (JSON)");
  expect(link3).toBeInTheDocument();
});
