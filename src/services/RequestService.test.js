import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import RequestService, { isAuthPost } from "./RequestService";
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

  it("patches", (done) => {
    mock.onPatch("fake.url").reply(200, data);
    RequestService.patch("fake.url", {}, (response) => {
      try {
        expect(response.status).toBe(200);
        expect(response.data).toStrictEqual(data);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
  it("patches and fails", (done) => {
    mock.onPatch("fake.url").reply(500, data);
    RequestService.patch("fake.url", {}, null, (err) => {
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
