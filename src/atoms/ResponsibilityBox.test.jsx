import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResponsibilityBox from "./ResponsibilityBox";

test("renders title and class for responsibility of Inherited", () => {
  render(<ResponsibilityBox responsibility="Inherited" />);

  const expectedTitle =
    "Fully Inherited Control: No system responsibility for addressing this control";
  const expectedClass = "responsibility-box--green";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("renders title and class for responsibility of Hybrid", () => {
  render(<ResponsibilityBox responsibility="Hybrid" />);

  const expectedTitle =
    "Shared / Hybrid Control: System is partially responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("renders title and class for responsibility of Allocated", () => {
  render(<ResponsibilityBox responsibility="Allocated" />);

  const expectedTitle =
    "Allocated Control: System is fully responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});
