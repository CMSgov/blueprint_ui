import axios from "axios";
import { config as configUrl } from "../config";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json; charset=UTF-8",
  },
};

let authConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `TOKEN ${sessionStorage.getItem("Token")}`,
  },
};

// returns true when
// post request is accessing login (auth) endpoint
// or posting to the users endpoint (account creation)
export function isAuthPost(url) {
  const loginUrl = configUrl.backendUrlAuth;
  const usersUrl = `${configUrl.backendUrl}/users/`;
  if (url === loginUrl || url === usersUrl) {
    return true;
  }
}

const RequestService = {
  get: async (url, callback, failureCallback) => {
    axios
      .get(url, authConfig)
      .then((response) => {
        callback(response);
      })
      .catch((err) => failureCallback && failureCallback(err));
  },
  post: async (url, body, callback, failureCallback) => {
    let postConfig = authConfig;

    // if post request is an authentication post (user login or user creation)
    // use generic config headers without Authorization info (since there isn't any yet)
    if (isAuthPost(url)) {
      postConfig = config;
    }

    axios
      .post(url, body, postConfig)
      .then((response) => {
        callback(response);
      })
      .catch((err) => failureCallback && failureCallback(err));
  },
  delete: async (url, callback, failureCallback) => {
    axios
      .delete(url, authConfig)
      .then((response) => {
        callback(response);
      })
      .catch((err) => failureCallback && failureCallback(err));
  },
};

export default RequestService;
