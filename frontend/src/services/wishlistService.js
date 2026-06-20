import api from "../api/axios";

export async function getWishlistByUser(
  userId
) {

  const response = await api.get(
    `/api/wishlist/user/${userId}`
  );

  return response.data;

}

export async function addToWishlist(
  request
) {

  const response = await api.post(
    "/api/wishlist",
    request
  );

  return response.data;

}

export async function removeFromWishlist(
  wishlistId
) {

  const response = await api.delete(
    `/api/wishlist/${wishlistId}`
  );

  return response.data;

}

export async function clearWishlist(
  userId
) {

  const response = await api.delete(
    `/api/wishlist/user/${userId}`
  );

  return response.data;

}

export async function moveToCart(
  wishlistId
) {

  const response = await api.post(
    `/api/wishlist/${wishlistId}/move-to-cart`
  );

  return response.data;

}