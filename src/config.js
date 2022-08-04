export const config = {
  backendUrl: `${process.env.REACT_APP_API_ENDPOINT}/api`,
  backendUrlAuth: `${process.env.REACT_APP_API_ENDPOINT}/api-token-auth/`,
};

const Config = (key) => {
  if (key === "backendUrl") {
    if (window._env_ === undefined) {
      return config.backendUrl;
    } else {
      return `${window._env_.REACT_APP_API_ENDPOINT}/api`;
    }
  }
};

export default Config;
