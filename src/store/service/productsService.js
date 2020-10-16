import http from "./httpService";
import { apiUrl } from "../../config.json";

const apiEndpoint = apiUrl + "/products";

export function getProducts() {
  return http.get(apiEndpoint);
}

export function getProductsbyId(id) {
  return http.get(apiEndpoint + `/${id}`);
}

export function decreaseInventory(id, data) {
  return http.patch(apiEndpoint + `/${id}`, { quantity: data });
}
