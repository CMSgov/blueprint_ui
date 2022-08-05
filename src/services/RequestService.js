import axios from "axios";
import { config as configUrl } from "../config";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json; charset=UTF-8",
  },
};

const authConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `TOKEN ${sessionStorage.getItem("Token")}`,
  },
};

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

    const isLoginPost = url === configUrl.backendUrlAuth;
    if (isLoginPost) postConfig = config;

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
