import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}

export function updateScore(id, data) {
  return http.patch(apiEndpoint + `/${id}`, {
    score: data,
  });
}
