import api from "../api/axios";

export async function getAllCoupons() {

  const response = await api.get(
    "/api/coupons"
  );

  return response.data;

}

export async function getCouponByCode(
  code
) {

  const response = await api.get(
    `/api/coupons/${code}`
  );

  return response.data;

}

export async function applyCoupon(
  request
) {

  const response = await api.post(
    "/api/coupons/apply",
    request
  );

  return response.data;

}

export async function createCoupon(
  coupon
) {

  const response = await api.post(
    "/api/coupons",
    coupon
  );

  return response.data;

}

export async function updateCoupon(
  id,
  coupon
) {

  const response = await api.put(
    `/api/coupons/${id}`,
    coupon
  );

  return response.data;

}

export async function deleteCoupon(
  id
) {

  const response = await api.delete(
    `/api/coupons/${id}`
  );

  return response.data;

}