import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Footer from "./Footer";

test("renders links", () => {
    render(<Footer />, {wrapper: MemoryRouter});
    const aboutLinkElement = screen.getByText(/About Rapid ATO/i);
    expect(aboutLinkElement).toBeInTheDocument();
    const supportLinkElement = screen.getByText(/Blueprint Support/i);
    expect(supportLinkElement).toBeInTheDocument();
    const startYearElement = screen.getByText(/GovReady PBC 2022/i);
    expect(startYearElement).toBeInTheDocument();
    const versionElement = screen.getByText(/v0.9.12-dev/i);
    expect(versionElement).toBeInTheDocument();
});
