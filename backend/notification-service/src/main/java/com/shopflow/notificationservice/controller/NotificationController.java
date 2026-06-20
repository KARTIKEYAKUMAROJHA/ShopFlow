package com.shopflow.notificationservice.controller;

import com.shopflow.notificationservice.entity.Notification;
import com.shopflow.notificationservice.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {

    private final NotificationRepository notificationRepository;

    @GetMapping
    public List<Notification> getAllNotifications() {

        return notificationRepository.findAll();

    }

    @GetMapping("/{id}")
    public Notification getNotificationById(
            @PathVariable Long id
    ) {

        return notificationRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Notification not found"
                        )
                );

    }

    @DeleteMapping("/{id}")
    public String deleteNotification(
            @PathVariable Long id
    ) {

        notificationRepository.deleteById(id);

        return "Notification deleted successfully";

    }

}