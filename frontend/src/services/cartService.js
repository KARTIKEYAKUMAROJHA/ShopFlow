import api from "../api/axios";

export async function addItemToCart(request) {

  const response = await api.post(

    "/api/cart",

    request

  );

  return response.data;

}

export async function getCartByUserId(userId) {

  const response = await api.get(

     `/api/cart/${userId}`

  );

  return response.data;

}

export async function removeItemFromCart(cartId) {

  const response = await api.delete(

    `/api/cart/${cartId}`

  );

  return response.data;

}

export async function clearUserCart(userId) {

  const response = await api.delete(

    `/api/cart/clear/${userId}`

  );

  return response.data;

}