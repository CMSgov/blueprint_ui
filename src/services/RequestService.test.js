import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import RequestService, {
  handleExpiredToken,
  isAuthPost,
} from "./RequestService";
import { config } from "../config";

describe("<RequestService />", () => {
  const data = { response: true };
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it("gets", (done) => {
    mock.onGet("fake.url").reply(200, data);
    RequestService.get("fake.url", (response) => {
      try {
        expect(response.status).toBe(200);
        expect(response.data).toStrictEqual(data);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it("gets and fails", (done) => {
    mock.onGet("fake.url").reply(500, data);
    RequestService.get("fake.url", null, (err) => {
      try {
        expect(err.response.status).toBe(500);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("posts", (done) => {
    mock.onPost("fake.url").reply(200, data);
    RequestService.post("fake.url", {}, (response) => {
      try {
        expect(response.status).toBe(200);
        expect(response.data).toStrictEqual(data);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it("posts and fails", (done) => {
    mock.onPost("fake.url").reply(500, data);
    RequestService.post("fake.url", {}, null, (err) => {
      try {
        expect(err.response.status).toBe(500);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("deletes", (done) => {
    mock.onDelete("fake.url").reply(200, data);
    RequestService.delete("fake.url", (response) => {
      try {
        expect(response.status).toBe(200);
        expect(response.data).toStrictEqual(data);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it("deletes and fails", (done) => {
    mock.onDelete("fake.url").reply(500, data);
    RequestService.delete("fake.url", null, (err) => {
      try {
        expect(err.response.status).toBe(500);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("isAuthPost function", () => {
  it("returns true when url is the login endpoint", () => {
    const loginUrl = config.backendUrlAuth;
    const isAuthPostReturn = isAuthPost(loginUrl);
    expect(isAuthPostReturn).toEqual(true);
  });

  it("returns true when url is the users endpoint", () => {
    const usersUrl = `${config.backendUrl}/users/`;
    const isAuthPostReturn = isAuthPost(usersUrl);
    expect(isAuthPostReturn).toEqual(true);
  });

  it("is falsy when another url (not login url nor users endpoint) is passed in", () => {
    const notUsersUrlAndNotLoginUrl = `${config.backendUrl}/projects/`;
    const isAuthPostReturn = isAuthPost(notUsersUrlAndNotLoginUrl);
    expect(isAuthPostReturn).toBeFalsy();
  });
});

describe("handleExpiredToken function", () => {
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
    window.sessionStorage.clear();
    window.location.assign.mockReset();
    jest.restoreAllMocks();
  });

  afterAll(() => {
    window.sessionStorage.clear();
    window.location = oldWindowLocation;
    jest.restoreAllMocks();
  });

  it("clears session storage and returns user to login page", () => {
    const username = "admin";
    const token = "1234567890token";
    const clearSessionSpy = jest.spyOn(window.sessionStorage, "clear");
    const windowLocationSpy = jest.spyOn(window.location, "assign");
    window.sessionStorage.setItem("Username", username);
    window.sessionStorage.setItem("Token", token);

    handleExpiredToken();

    // sessionStorage is cleared removing authentication info
    expect(clearSessionSpy).toHaveBeenCalledTimes(1);
    expect(window.sessionStorage.getItem("Username")).toEqual(null);
    expect(window.sessionStorage.getItem("Token")).toEqual(null);

    // user is redirected to home page
    expect(windowLocationSpy).toHaveBeenCalledTimes(1);
    expect(windowLocationSpy).toBeCalledWith("/login");
  });
});
