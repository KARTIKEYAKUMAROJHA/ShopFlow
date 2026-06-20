import api from "../api/axios";

export async function createOrder(request) {

  const response = await api.post(
    "/api/orders",
    request
  );

  return response.data;

}

export async function getOrdersByUser(userId) {

  const response = await api.get(
    `/api/orders/${userId}`
  );

  return response.data;

}

export async function getOrderById(orderId) {

  const response = await api.get(
    `/api/orders/${orderId}`
  );

  return response.data;

}

export async function cancelOrder(orderId) {

  const response = await api.put(
    `/api/orders/${orderId}/cancel`
  );

  return response.data;

}

export async function getAllOrders() {

  const response = await api.get(
    "/api/orders"
  );

  return response.data;

}