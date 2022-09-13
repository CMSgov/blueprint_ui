import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectSetup from "./ProjectSetup";
import { config } from "../config";
import RequestService from "../services/RequestService";

test("renders page", () => {
  render(<ProjectSetup />, { wrapper: MemoryRouter });
  const subHeader = screen.getByText(
    "This will help us suggest System Components and an initial control baseline."
  );
  expect(subHeader).toBeInTheDocument();
  const question1 = screen.getByText("What is the name of the FISMA system?");
  expect(question1).toBeInTheDocument();
  const question2 = screen.getByText(
    "Where is this system going to be located?"
  );
  expect(question2).toBeInTheDocument();
  const question3 = screen.getByText(
    "What is the FISMA impact level of this system?"
  );
  expect(question3).toBeInTheDocument();

  const label1 = screen.getByText("Full name");
  expect(label1).toBeInTheDocument();
  const label2 = screen.getByText("Acronym");
  expect(label2).toBeInTheDocument();
  const label3 = screen.getByText("CMS AWS Commercial East-West");
  expect(label3).toBeInTheDocument();
  const label4 = screen.getByText("CMS AWS GovCloud");
  expect(label4).toBeInTheDocument();
  const label5 = screen.getByText("Microsoft Azure");
  expect(label5).toBeInTheDocument();
  const label6 = screen.getByText("Other");
  expect(label6).toBeInTheDocument();
  const label7 = screen.getByText("Low");
  expect(label7).toBeInTheDocument();
  const label8 = screen.getByText("Moderate");
  expect(label8).toBeInTheDocument();
  const label9 = screen.getByText("High");
  expect(label9).toBeInTheDocument();
});

describe("Form functionality", () => {
  test("Submitting form makes post call", async () => {
    RequestService.post = jest.fn();

    render(<ProjectSetup />, { wrapper: MemoryRouter });

    // fill out form and click button to submit
    fireEvent.change(screen.getByLabelText("Full name"), {
      target: { value: "Full Name" },
    });
    fireEvent.change(screen.getByLabelText("Acronym"), {
      target: { value: "Acronym" },
    });
    fireEvent.click(screen.getByLabelText("CMS AWS Commercial East-West"));
    fireEvent.click(screen.getByText("Low"));
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    const expectedRequestUrl = `${config.backendUrl}/projects/`;
    const expectedRequestBody = `{"catalog_version":"CMS_ARS_3_1","acronym":"Acronym","title":"Full Name","location":"cms_aws","impact_level":"low"}`;

    expect(RequestService.post).toHaveBeenCalledWith(
      expectedRequestUrl,
      expectedRequestBody,
      expect.anything()
    );
  });
});
