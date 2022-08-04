import axios from "axios";

// const config = (token) => ({
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-type": "application/json; charset=UTF-8",
//     "Authentication": `TOKEN ${token}`,
//   },
// });
const config = (authToken) => {
  console.log("Request service auth token: ", authToken);
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `TOKEN ${authToken}` || null,
    },
  };
};

const loginConfig = () => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json; charset=UTF-8",
  },
});

const RequestService = {
  get: async (url, authToken, callback, failureCallback) => {
    axios
      .get(url, config(authToken))
      .then((response) => {
        callback(response);
      })
      .catch((err) => failureCallback && failureCallback(err));
  },
  post: async (url, body, callback, failureCallback) => {
    axios
      .post(url, body, config())
      .then((response) => {
        callback(response);
      })
      .catch((err) => failureCallback && failureCallback(err));
  },
  loginPost: async (url, body, callback, failureCallback) => {
    axios
      .post(url, body, loginConfig())
      .then((response) => {
        callback(response);
      })
      .catch((err) => failureCallback && failureCallback(err));
  },
  delete: async (url, callback, failureCallback) => {
    axios
      .delete(url, config())
      .then((response) => {
        callback(response);
      })
      .catch((err) => failureCallback && failureCallback(err));
  },
};

export default RequestService;
