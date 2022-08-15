import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectSetup from "./ProjectSetup";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";

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

test("Testing inputs work makes post call", async () => {
  const pageData = {
    title: "Test Project",
    acronym: "TP",
    id: 1,
  };
  let mock = new MockAdapter(axios);
  mock.onPost(`${config.backendUrl}/projects/`).reply(200, pageData);
  render(<ProjectSetup />, { wrapper: MemoryRouter });
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.change(screen.getByLabelText("Full name"), {
    target: { value: "Full Name" },
  });
  fireEvent.change(screen.getByLabelText("Acronym"), {
    target: { value: "Acronym" },
  });
  fireEvent.click(screen.getByLabelText("CMS AWS Commercial East-West"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByLabelText("CMS AWS GovCloud"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByLabelText("Microsoft Azure"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByLabelText("Other"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByText("Low"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByText("Moderate"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByText("High"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
});
