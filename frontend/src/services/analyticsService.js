import api from "../api/axios";

export async function getSalesAnalytics() {

  const response = await api.get(
    "/api/analytics/sales"
  );

  return response.data;

}

export async function getRevenueAnalytics() {

  const response = await api.get(
    "/api/analytics/revenue"
  );

  return response.data;

}

export async function getOrderAnalytics() {

  const response = await api.get(
    "/api/analytics/orders"
  );

  return response.data;

}

export async function getUserAnalytics() {

  const response = await api.get(
    "/api/analytics/users"
  );

  return response.data;

}

export async function getProductAnalytics() {

  const response = await api.get(
    "/api/analytics/products"
  );

  return response.data;

}

export async function getDashboardAnalytics() {

  const response = await api.get(
    "/api/analytics/dashboard"
  );

  return response.data;

}