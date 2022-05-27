import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Header from "./Header";

test("renders links", () => {
    render(<Header />, {wrapper: MemoryRouter});
    const helpLinkElement = screen.getByText(/help/i);
    expect(helpLinkElement).toBeInTheDocument();
    const projectsLinkElement = screen.getByText(/projects/i);
    expect(projectsLinkElement).toBeInTheDocument();
    const componentsLinkElement = screen.getByText(/Component Library/i);
    expect(componentsLinkElement).toBeInTheDocument();
});
