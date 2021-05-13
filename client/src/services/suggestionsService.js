import http from "./httpService";

const apiEndpoint = '/suggestions';

export function getSuggestions(params) {
  return http.post(apiEndpoint, { params });
}