package com.shopflow.notificationservice.consumer;

import com.shopflow.notificationservice.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentConsumer {

    private final NotificationService notificationService;

    @KafkaListener(
            topics = "payment-success-topic",
            groupId = "notification-group"
    )
    public void consume(
            String message
    ) {

        System.out.println(
                "EMAIL SENT : " + message
        );

        notificationService.saveNotification(
                message
        );

    }

}