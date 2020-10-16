import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndpoint = apiUrl + "/categories";

export function getCategories() {
  return http.get(apiEndpoint);
}

export function getCategorybyId(id) {
  return http.get(apiEndpoint + `/${id}`);
}
