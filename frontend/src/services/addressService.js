import api from "../api/axios";

export async function getAllAddresses() {

  const response = await api.get(
    "/api/addresses"
  );

  return response.data;

}

export async function getAddressById(
  id
) {

  const response = await api.get(
    `/api/addresses/${id}`
  );

  return response.data;

}

export async function getAddressesByUser(
  userId
) {

  const response = await api.get(
    `/api/addresses/user/${userId}`
  );

  return response.data;

}

export async function createAddress(
  address
) {

  const response = await api.post(
    "/api/addresses",
    address
  );

  return response.data;

}

export async function updateAddress(
  id,
  address
) {

  const response = await api.put(
    `/api/addresses/${id}`,
    address
  );

  return response.data;

}

export async function deleteAddress(
  id
) {

  const response = await api.delete(
    `/api/addresses/${id}`
  );

  return response.data;

}