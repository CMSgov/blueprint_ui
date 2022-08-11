import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

const sessionStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock,
});

test("renders links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const helpLinkElement = screen.getByRole("link", { name: "Help" });
  const projectsLinkElement = screen.getByRole("link", { name: "Projects" });
  const componentsLinkElement = screen.getByRole("link", {
    name: "Component Library",
  });

  expect(helpLinkElement).toHaveAttribute("href", "/help");
  expect(projectsLinkElement).toHaveAttribute("href", "/projects");
  expect(componentsLinkElement).toHaveAttribute("href", "/components");
});

const oldWindowLocation = window.location;

beforeAll(() => {
  delete window.location;

  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(oldWindowLocation),
      assign: {
        configurable: true,
        value: jest.fn(),
      },
    }
  );
});
beforeEach(() => {
  window.location.assign.mockReset();
});
afterAll(() => {
  // restore `window.location` to the `jsdom` `Location` object
  window.location = oldWindowLocation;
});

describe("user info in header", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.location.assign.mockReset();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    window.sessionStorage.clear();
    window.location = oldWindowLocation;
    jest.restoreAllMocks();
  });

  test("renders username when user is authenticated", () => {
    const username = "admin";
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");

    // authenticated user is saved in session storage
    window.sessionStorage.setItem("Username", username);

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const userButtonElement = screen.getByRole("button", { name: username });

    expect(getItemSpy).toBeCalledWith("Username");
    expect(window.sessionStorage.getItem("Username")).toEqual(username);
    expect(userButtonElement).toHaveTextContent(username);
  });

  test.skip("clicking username will log out the user", () => {
    const username = "admin";
    const clearSessionSpy = jest.spyOn(window.sessionStorage, "clear");
    window.sessionStorage.setItem("Username", username);

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const userButtonElement = screen.getByRole("button", { name: username });

    // logging out the user
    fireEvent.click(userButtonElement);
    expect(clearSessionSpy).toHaveBeenCalledTimes(1);

    // username no longer exists in session storage
    expect(window.sessionStorage.getItem("Username")).toEqual(null);
  });
});
