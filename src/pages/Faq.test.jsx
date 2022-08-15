import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Faq from "./Faq";

test("renders faq page", async () => {
  render(
    <MemoryRouter initialEntries={["/help/faq"]}>
      <Faq />
    </MemoryRouter>
  );

  await waitFor(() => {
    screen.getByText("Frequently Asked Questions");
  });
});
