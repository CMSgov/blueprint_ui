import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import ControlsCompletedCTA from "./ControlsCompletedCTA";

test("renders with control numbers in controls completed text", () => {
  const numControlsComplete = 9;
  const numControlsTotal = 183;
  render(
    <MemoryRouter initialEntries={[`/projects`]}>
      <ControlsCompletedCTA
        numControlsComplete={numControlsComplete}
        numControlsTotal={numControlsTotal}
      />
    </MemoryRouter>
  );

  const expectedControlsCompletedText = screen.getByText(
    `${numControlsComplete} of ${numControlsTotal} Controls Completed`
  );
  expect(expectedControlsCompletedText).toBeInTheDocument();
});

test("renders with percent of controls completed on the percent complete graphic", () => {
  const projectId = 999;
  const numControlsComplete = 9;
  const numControlsTotal = 183;
  const expectedPercentControlsComplete = 4;

  render(
    <MemoryRouter initialEntries={[`/projects/${projectId}/`]}>
      <ControlsCompletedCTA
        numControlsComplete={numControlsComplete}
        numControlsTotal={numControlsTotal}
      />
    </MemoryRouter>
  );

  const percentCompleteGraphic = screen.getByTestId("percent_complete_graphic");
  const expectedControlsCompletedText = within(
    percentCompleteGraphic
  ).getByText(`${expectedPercentControlsComplete}%`);
  expect(expectedControlsCompletedText).toBeInTheDocument();
});

test("renders with button to controls page", () => {
  const projectId = 999;
  const numControlsComplete = 9;
  const numControlsTotal = 183;

  render(
    <MemoryRouter initialEntries={[`/projects/${projectId}`]}>
      <ControlsCompletedCTA
        numControlsComplete={numControlsComplete}
        numControlsTotal={numControlsTotal}
      />
    </MemoryRouter>
  );

  const expectedControlsUrl = `/projects/${projectId}/controls`;
  const controlsElement = screen.getByRole("link");
  expect(controlsElement).toHaveAttribute("href", expectedControlsUrl);
  expect(within(controlsElement).getByRole("button")).toHaveTextContent(
    "Manage Controls"
  );
});
