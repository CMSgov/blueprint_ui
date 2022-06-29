// eslint-disable-next-line
const config = {
  backendUrl: `${process.env.REACT_APP_API_ENDPOINT}/api`,
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
