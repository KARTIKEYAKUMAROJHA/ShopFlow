package com.shopflow.paymentservice.producer;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentProducer {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public void sendPaymentSuccessMessage(
            String message
    ) {

        kafkaTemplate.send(
                "payment-success-topic",
                message
        );

    }

}