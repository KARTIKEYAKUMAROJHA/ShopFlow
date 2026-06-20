import api from "../api/axios";

export async function getAllNotifications() {

  const response = await api.get(
    "/api/notifications"
  );

  return response.data;

}

export async function getNotificationsByUser(
  userId
) {

  const response = await api.get(
    `/api/notifications/user/${userId}`
  );

  return response.data;

}

export async function getNotificationById(
  id
) {

  const response = await api.get(
    `/api/notifications/${id}`
  );

  return response.data;

}

export async function createNotification(
  notification
) {

  const response = await api.post(
    "/api/notifications",
    notification
  );

  return response.data;

}

export async function markAsRead(
  id
) {

  const response = await api.put(
    `/api/notifications/${id}/read`
  );

  return response.data;

}

export async function markAllAsRead(
  userId
) {

  const response = await api.put(
    `/api/notifications/user/${userId}/read`
  );

  return response.data;

}

export async function deleteNotification(
  id
) {

  const response = await api.delete(
    `/api/notifications/${id}`
  );

  return response.data;

}

export async function deleteAllNotifications(
  userId
) {

  const response = await api.delete(
    `/api/notifications/user/${userId}`
  );

  return response.data;

}