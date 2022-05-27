import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Footer from "./Footer";

test("renders links", () => {
    render(<Footer />, {wrapper: MemoryRouter});
    const aboutLinkElement = screen.getByText(/About Rapid ATO/i);
    expect(aboutLinkElement).toBeInTheDocument();
    const supportLinkElement = screen.getByText(/Blueprint Support/i);
    expect(supportLinkElement).toBeInTheDocument();
});
