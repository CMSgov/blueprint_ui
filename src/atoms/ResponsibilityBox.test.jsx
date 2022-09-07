import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResponsibilityBox from "./ResponsibilityBox";

test("renders title and class for responsibility of Inherited", () => {
  render(<ResponsibilityBox responsibilityForControl="Inherited" />);

  const expectedTitle =
    "Fully Inherited Control: No system responsibility for addressing this control";
  const expectedClass = "responsibility-box--green";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("renders title and class for responsibility of Hybrid", () => {
  render(<ResponsibilityBox responsibilityForControl="Hybrid" />);

  const expectedTitle =
    "Shared / Hybrid Control: System is partially responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("renders title and class for responsibility of Allocated", () => {
  render(<ResponsibilityBox responsibilityForControl="Allocated" />);

  const expectedTitle =
    "Allocated Control: System is fully responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("assigns Allocated responsibility as default when NO value passed in", () => {
  render(<ResponsibilityBox />);

  const expectedTitle =
    "Allocated Control: System is fully responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("assigns Allocated responsibility as default when NULL value passed in", () => {
  render(<ResponsibilityBox responsibilityForControl={null} />);

  const expectedTitle =
    "Allocated Control: System is fully responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});

test("assigns Allocated responsibility as default when UNDEFINED value passed in", () => {
  render(<ResponsibilityBox responsibilityForControl={undefined} />);

  const expectedTitle =
    "Allocated Control: System is fully responsible for addressing this control";
  const expectedClass = "responsibility-box--yellow";

  const responsibilityBox = screen.getByTestId("responsibility_box");
  expect(responsibilityBox).toHaveTextContent(expectedTitle);
  expect(responsibilityBox).toHaveClass(expectedClass);
});
