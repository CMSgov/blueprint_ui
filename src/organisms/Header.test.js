import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { AuthProvider } from "../AuthContext";

test("renders links", () => {
  render(
    <MemoryRouter>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </MemoryRouter>
  );
  const helpLinkElement = screen.getByText(/help/i);
  expect(helpLinkElement).toBeInTheDocument();
  const projectsLinkElement = screen.getByText(/projects/i);
  expect(projectsLinkElement).toBeInTheDocument();
  const componentsLinkElement = screen.getByText(/Component Library/i);
  expect(componentsLinkElement).toBeInTheDocument();
});
