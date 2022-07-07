import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResponsibilityBox from "./ResponsibilityBox";

test("renders title and class for responsibility of none", () => {
  render(<ResponsibilityBox responsibility="none" />);

  const expectedTitle =
    "Fully Inherited Control: No system responsibility for addressing this control";
  const expectedClass = "responsibility-box--green";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("renders title and class for responsibility of some", () => {
  render(<ResponsibilityBox responsibility="some" />);

  const expectedTitle =
    "Shared / Hybrid Control: System is partially responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("renders title and class for responsibility of all", () => {
  render(<ResponsibilityBox responsibility="all" />);

  const expectedTitle =
    "Allocated Control: System is fully responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});
