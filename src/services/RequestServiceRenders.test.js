import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import {
  DeleteComponent,
  GetComponent,
  PostComponent,
} from "../testUtils/componentsUsingRequestService";

jest.mock("axios");

describe("RequestService handles 401 request", () => {
  const oldWindowLocation = window.location;
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
    const username = "admin";
    const token = "1234567890token";
    window.sessionStorage.setItem("Username", username);
    window.sessionStorage.setItem("Token", token);
    window.sessionStorage.clear();
    window.location.assign.mockReset();
    jest.restoreAllMocks();
  });

  afterAll(() => {
    window.sessionStorage.clear();
    window.location = oldWindowLocation;
    jest.restoreAllMocks();
  });

  it("delete attempt clears session storage and redirects user to login page", async () => {
    const errorResponse = {
      response: {
        message: "Request failed with status code 401",
        code: "ERR_BAD_REQUEST",
        status: 401,
      },
    };
    axios.delete.mockImplementation(() => Promise.reject(errorResponse));

    const clearSessionSpy = jest.spyOn(window.sessionStorage, "clear");
    const windowLocationSpy = jest.spyOn(window.location, "assign");

    render(
      <MemoryRouter>
        <DeleteComponent />
      </MemoryRouter>
    );

    await waitFor(() => {
      // user is redirected to home page
      expect(windowLocationSpy).toBeCalledWith("/login");
    });
    // sessionStorage is cleared removing authentication info
    expect(clearSessionSpy).toHaveBeenCalledTimes(1);
    expect(window.sessionStorage.getItem("Username")).toEqual(null);
    expect(window.sessionStorage.getItem("Token")).toEqual(null);
  });

  it("get attempt clears session storage and redirects user to login page", async () => {
    const errorResponse = {
      response: {
        message: "Request failed with status code 401",
        code: "ERR_BAD_REQUEST",
        status: 401,
      },
    };
    axios.get.mockImplementation(() => Promise.reject(errorResponse));

    const clearSessionSpy = jest.spyOn(window.sessionStorage, "clear");
    const windowLocationSpy = jest.spyOn(window.location, "assign");

    render(
      <MemoryRouter>
        <GetComponent />
      </MemoryRouter>
    );

    await waitFor(() => {
      // user is redirected to home page
      expect(windowLocationSpy).toBeCalledWith("/login");
    });
    // sessionStorage is cleared removing authentication info
    expect(clearSessionSpy).toHaveBeenCalledTimes(1);
    expect(window.sessionStorage.getItem("Username")).toEqual(null);
    expect(window.sessionStorage.getItem("Token")).toEqual(null);
  });

  it("post attempt clears session storage and redirects user to login page", async () => {
    const errorResponse = {
      response: {
        message: "Request failed with status code 401",
        code: "ERR_BAD_REQUEST",
        status: 401,
      },
    };
    axios.post.mockImplementation(() => Promise.reject(errorResponse));

    const clearSessionSpy = jest.spyOn(window.sessionStorage, "clear");
    const windowLocationSpy = jest.spyOn(window.location, "assign");

    render(
      <MemoryRouter>
        <PostComponent />
      </MemoryRouter>
    );

    await waitFor(() => {
      // user is redirected to home page
      expect(windowLocationSpy).toBeCalledWith("/login");
    });
    // sessionStorage is cleared removing authentication info
    expect(clearSessionSpy).toHaveBeenCalledTimes(1);
    expect(window.sessionStorage.getItem("Username")).toEqual(null);
    expect(window.sessionStorage.getItem("Token")).toEqual(null);
  });
});
