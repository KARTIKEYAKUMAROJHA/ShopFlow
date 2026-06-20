import api from "../api/axios";

export async function createPayment(request) {

  const response = await api.post(
    "/api/payments",
    request
  );

  return response.data;

}

export async function getPaymentById(id) {

  const response = await api.get(
    `/api/payments/${id}`
  );

  return response.data;

}

export async function getPaymentsByUser(userId) {

  const response = await api.get(
    `/api/payments/user/${userId}`
  );

  return response.data;

}

export async function getAllPayments() {

  const response = await api.get(
    "/api/payments"
  );

  return response.data;

}

export async function updatePaymentStatus(
  paymentId,
  status
) {

  const response = await api.put(
    `/api/payments/${paymentId}`,
    {
      status,
    }
  );

  return response.data;

}

export async function deletePayment(
  paymentId
) {

  const response = await api.delete(
    `/api/payments/${paymentId}`
  );

  return response.data;

}