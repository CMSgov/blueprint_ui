import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

// let windowSpy;

// beforeEach(() => {
//   windowSpy = jest.spyOn(window, "window", "_env_");
// });

// afterEach(() => {
//   windowSpy.mockRestore();
// });

test("renders links", () => {
  // windowSpy.mockImplementation(() => ({
  //     _env_: {
  //         REACT_APP_API_ENDPOINT:'http://localhost:8000'
  //     }
  //   }));
  // Object.defineProperty(window, '_env_', {
  //     value: {
  //         REACT_APP_API_ENDPOINT:'http://localhost:8000'
  //     }
  //   });
  render(<Header />, { wrapper: MemoryRouter });
  const helpLinkElement = screen.getByText(/help/i);
  expect(helpLinkElement).toBeInTheDocument();
  const projectsLinkElement = screen.getByText(/projects/i);
  expect(projectsLinkElement).toBeInTheDocument();
  const componentsLinkElement = screen.getByText(/Component Library/i);
  expect(componentsLinkElement).toBeInTheDocument();
});
