import api from "../api/axios";

export async function getAllUsers() {

  const response = await api.get(
    "/api/users"
  );

  return response.data;

}

export async function getUserById(id) {

  const response = await api.get(
    `/api/users/${id}`
  );

  return response.data;

}

export async function getUserByEmail(email) {

  const response = await api.get(
    `/api/users/email/${email}`
  );

  return response.data;

}

export async function createUser(user) {

  const response = await api.post(
    "/api/users",
    user
  );

  return response.data;

}

export async function updateUser(id, user) {

  const response = await api.put(
    `/api/users/${id}`,
    user
  );

  return response.data;

}

export async function updateUserRole(
  id,
  role
) {

  const response = await api.put(
    `/api/users/${id}/role`,
    {
      role,
    }
  );

  return response.data;

}

export async function deleteUser(id) {

  const response = await api.delete(
    `/api/users/${id}`
  );

  return response.data;

}