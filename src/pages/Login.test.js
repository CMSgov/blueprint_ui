import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { config } from "../config";
import Login from "./Login";
import RequestService from "../services/RequestService";

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

beforeEach(() => {
  window.sessionStorage.clear();
  jest.restoreAllMocks();
});
afterAll(() => {
  window.sessionStorage.clear();
  jest.restoreAllMocks();
});

test("sets token and username in session storage upon login", async () => {
  const mockResponse = {
    token: "999",
    user: {
      username: "admin",
      full_name: "Mister Admin",
      email: "admin@test.com",
    },
  };
  let mock = new MockAdapter(axios);
  mock.onPost(config.backendUrlAuth).reply(200, mockResponse);

  const setItemSpy = jest.spyOn(window.sessionStorage, "setItem");

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  const signInButton = screen.getByRole("button", { name: "Sign in" });
  fireEvent.click(signInButton);

  // make sure setItem has run for both Username and Token before asserting those values
  await waitFor(() => {
    expect(setItemSpy).toHaveBeenCalledTimes(2);
  });
  expect(window.sessionStorage.getItem("Token")).toEqual(mockResponse.token);
  expect(window.sessionStorage.getItem("Username")).toEqual(
    mockResponse.user.username
  );
});

test("filled in form data is used to make api authentication request", async () => {
  const username = "admin";
  const password = "password";

  RequestService.post = jest.fn();

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // fill out login form and click sign in
  const usernameInput = screen.getByPlaceholderText("Enter Username");
  fireEvent.change(usernameInput, { target: { value: username } });
  const passwordInput = screen.getByPlaceholderText("Enter Password");
  fireEvent.change(passwordInput, { target: { value: password } });
  const signInButton = screen.getByRole("button", { name: "Sign in" });
  fireEvent.click(signInButton);

  const expectedRequestUrl = config.backendUrlAuth;
  const expectedRequestBody = `{"username":"${username}","password":"${password}"}`;

  await waitFor(() => {
    expect(RequestService.post).toHaveBeenCalledWith(
      expectedRequestUrl,
      expectedRequestBody,
      expect.anything()
    );
  });
});
