import api from "../api/axios";

export async function loginUser(loginRequest) {

  const response = await api.post(
    "/api/auth/login",
    loginRequest
  );

  return response.data;

}

export async function registerUser(registerRequest) {

  const response = await api.post(
    "/api/auth/register",
    registerRequest
  );

  return response.data;

}

export function saveToken(token) {

  localStorage.setItem(
    "token",
    token
  );

}

export function getToken() {

  return localStorage.getItem(
    "token"
  );

}

export function removeToken() {

  localStorage.removeItem(
    "token"
  );

}

export function saveUser(email, role) {

  localStorage.setItem(
    "email",
    email
  );

  localStorage.setItem(
    "role",
    role
  );

}

export function getUserEmail() {

  return localStorage.getItem(
    "email"
  );

}

export function getUserRole() {

  return localStorage.getItem(
    "role"
  );

}

export function logoutUser() {

  localStorage.removeItem(
    "token"
  );

  localStorage.removeItem(
    "email"
  );

  localStorage.removeItem(
    "role"
  );

}