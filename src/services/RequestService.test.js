import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import RequestService from "./RequestService";

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
