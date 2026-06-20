import api from "../api/axios";

export async function getSalesReport() {

  const response = await api.get(
    "/api/reports/sales"
  );

  return response.data;

}

export async function getRevenueReport() {

  const response = await api.get(
    "/api/reports/revenue"
  );

  return response.data;

}

export async function getInventoryReport() {

  const response = await api.get(
    "/api/reports/inventory"
  );

  return response.data;

}

export async function getUserReport() {

  const response = await api.get(
    "/api/reports/users"
  );

  return response.data;

}

export async function getOrderReport() {

  const response = await api.get(
    "/api/reports/orders"
  );

  return response.data;

}

export async function exportSalesReport() {

  const response = await api.get(
    "/api/reports/sales/export",
    {
      responseType: "blob",
    }
  );

  return response.data;

}

export async function exportRevenueReport() {

  const response = await api.get(
    "/api/reports/revenue/export",
    {
      responseType: "blob",
    }
  );

  return response.data;

}