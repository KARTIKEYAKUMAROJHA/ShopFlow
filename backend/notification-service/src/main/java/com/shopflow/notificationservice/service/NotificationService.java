package com.shopflow.notificationservice.service;

import com.shopflow.notificationservice.entity.Notification;
import com.shopflow.notificationservice.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public Notification saveNotification(String message) {

        Notification notification = new Notification();

        notification.setMessage(message);

        return notificationRepository.save(notification);
    }
}