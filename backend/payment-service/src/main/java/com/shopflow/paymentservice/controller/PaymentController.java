package com.shopflow.paymentservice.controller;

import com.shopflow.paymentservice.dto.PaymentRequest;
import com.shopflow.paymentservice.entity.Payment;
import com.shopflow.paymentservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public Payment processPayment(
            @RequestBody PaymentRequest request
    ) {

        return paymentService.processPayment(request);

    }

}