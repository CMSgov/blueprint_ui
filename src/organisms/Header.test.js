import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders links", () => {
    render(<Header />);
    const helpLinkElement = screen.getByText(/help/i);
    expect(helpLinkElement).toBeInTheDocument();
    const projectsLinkElement = screen.getByText(/projects/i);
    expect(projectsLinkElement).toBeInTheDocument();
    const componentsLinkElement = screen.getByText(/Component Library/i);
    expect(componentsLinkElement).toBeInTheDocument();
  });
  