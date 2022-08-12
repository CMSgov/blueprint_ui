import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ContactUs from "./ContactUs";

test("renders contact us page", async () => {
  render(
    <MemoryRouter initialEntries={["/help/contact-us"]}>
      <ContactUs />
    </MemoryRouter>
  );

  await waitFor(() => {
    screen.getByText("Contact Us");
  });
});
