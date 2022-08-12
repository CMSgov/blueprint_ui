import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import RequestService, { isAuthPost } from "./RequestService";
import { config } from "../config";

describe("<RequestService />", () => {
  const data = { response: true };
  let mock = new MockAdapter(axios);

  it("gets", () => {
    mock.onGet("fake.url").reply(200, data);
    return RequestService.get("fake.url", (response) => {
      expect(response.status).toBe(200);
      expect(response.data).toStrictEqual(data);
    });
  });
  it("gets and fails", () => {
    mock.onGet("fake.url").reply(500, data);
    return RequestService.get("fake.url", null, (err) => {
      expect(err.response.status).toBe(500);
    });
  });
  it("posts", () => {
    mock.onPost("fake.url").reply(200, data);
    return RequestService.post("fake.url", {}, (response) => {
      expect(response.status).toBe(200);
      expect(response.data).toStrictEqual(data);
    });
  });
  it("posts and fails", () => {
    mock.onPost("fake.url").reply(500, data);
    return RequestService.post("fake.url", {}, null, (err) => {
      expect(err.response.status).toBe(500);
    });
  });
  it("deletes", () => {
    mock.onDelete("fake.url").reply(200, data);
    return RequestService.delete("fake.url", (response) => {
      expect(response.status).toBe(200);
      expect(response.data).toStrictEqual(data);
    });
  });
  it("deletes and fails", () => {
    mock.onDelete("fake.url").reply(500, data);
    return RequestService.delete("fake.url", null, (err) => {
      expect(err.response.status).toBe(500);
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
