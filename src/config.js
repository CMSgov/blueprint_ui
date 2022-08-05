const rootUrl = window._env_
  ? window._env_.REACT_APP_API_ENDPOINT
  : process.env.REACT_APP_API_ENDPOINT;

export const config = {
  backendUrl: `${rootUrl}/api`,
  backendUrlAuth: `${rootUrl}/api-token-auth/`,
};
