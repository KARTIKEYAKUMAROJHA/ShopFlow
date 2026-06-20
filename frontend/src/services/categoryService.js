import api from "../api/axios";

export async function getAllCategories() {

  const response = await api.get(
    "/api/categories"
  );

  return response.data;

}

export async function getCategoryById(
  id
) {

  const response = await api.get(
    `/api/categories/${id}`
  );

  return response.data;

}

export async function createCategory(
  category
) {

  const response = await api.post(
    "/api/categories",
    category
  );

  return response.data;

}

export async function updateCategory(
  id,
  category
) {

  const response = await api.put(
    `/api/categories/${id}`,
    category
  );

  return response.data;

}

export async function deleteCategory(
  id
) {

  const response = await api.delete(
    `/api/categories/${id}`
  );

  return response.data;

}

export async function getProductsByCategory(
  categoryName
) {

  const response = await api.get(
    `/api/categories/${categoryName}/products`
  );

  return response.data;

}