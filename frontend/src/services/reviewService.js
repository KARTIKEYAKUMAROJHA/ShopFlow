import api from "../api/axios";

export async function getAllReviews() {

  const response = await api.get(
    "/api/reviews"
  );

  return response.data;

}

export async function getReviewById(id) {

  const response = await api.get(
    `/api/reviews/${id}`
  );

  return response.data;

}

export async function getReviewsByProduct(
  productId
) {

  const response = await api.get(
    `/api/reviews/product/${productId}`
  );

  return response.data;

}

export async function getReviewsByUser(
  userId
) {

  const response = await api.get(
    `/api/reviews/user/${userId}`
  );

  return response.data;

}

export async function createReview(
  review
) {

  const response = await api.post(
    "/api/reviews",
    review
  );

  return response.data;

}

export async function updateReview(
  id,
  review
) {

  const response = await api.put(
    `/api/reviews/${id}`,
    review
  );

  return response.data;

}

export async function deleteReview(
  id
) {

  const response = await api.delete(
    `/api/reviews/${id}`
  );

  return response.data;

}