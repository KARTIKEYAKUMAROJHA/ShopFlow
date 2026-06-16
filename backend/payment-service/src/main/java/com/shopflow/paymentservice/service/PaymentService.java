package com.shopflow.paymentservice.service;

import com.shopflow.paymentservice.dto.PaymentRequest;
import com.shopflow.paymentservice.entity.Payment;
import com.shopflow.paymentservice.producer.PaymentProducer;
import com.shopflow.paymentservice.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;

    private final PaymentProducer paymentProducer;

    public Payment processPayment(
            PaymentRequest request
    ) {

        Payment payment = Payment.builder()
                .orderId(request.getOrderId())
                .amount(request.getAmount())
                .status("SUCCESS")
                .build();

        Payment savedPayment =
                paymentRepository.save(payment);

        paymentProducer.sendPaymentSuccessMessage(
                "Payment Successful For Order Id : "
                        + savedPayment.getOrderId()
        );

        return savedPayment;

    }

}