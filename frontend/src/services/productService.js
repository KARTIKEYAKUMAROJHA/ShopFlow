import api from "../api/axios";

export async function getAllProducts() {

  const response = await api.get(
    "/api/products"
  );

  return response.data;

}

export async function getProductById(id) {

  const response = await api.get(
    `/api/products/${id}`
  );

  return response.data;

}

export async function addProduct(product) {

  const response = await api.post(
    "/api/products",
    product
  );

  return response.data;

}

export async function updateProduct(id, product) {

  const response = await api.put(
    `/api/products/${id}`,
    product
  );

  return response.data;

}

export async function deleteProduct(id) {

  const response = await api.delete(
    `/api/products/${id}`
  );

  return response.data;

}

export async function getProductsByCategory(category) {

  const response = await api.get(
    `/api/products/category/${category}`
  );

  return response.data;

}

export async function searchProducts(keyword) {

  const response = await api.get(
    `/api/products/search/${keyword}`
  );

  return response.data;

}