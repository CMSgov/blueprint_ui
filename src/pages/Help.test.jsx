import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Help from "./Help";

test("renders help page", async () => {
  render(
    <MemoryRouter initialEntries={["/help"]}>
      <Help />
    </MemoryRouter>
  );

  await waitFor(() => {
    screen.getByText("Help");
  });
});
