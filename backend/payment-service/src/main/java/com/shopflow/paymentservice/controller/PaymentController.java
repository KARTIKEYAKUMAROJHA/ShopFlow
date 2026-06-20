package com.shopflow.paymentservice.controller;

import com.shopflow.paymentservice.dto.PaymentRequest;
import com.shopflow.paymentservice.entity.Payment;
import com.shopflow.paymentservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{id}")
    public Payment getPaymentById(
            @PathVariable Long id
    ) {
        return paymentService.getPaymentById(id);
    }

    @PutMapping("/{id}")
    public Payment updatePayment(
            @PathVariable Long id,
            @RequestBody PaymentRequest request
    ) {
        return paymentService.updatePayment(id, request);
    }

    @DeleteMapping("/{id}")
    public String deletePayment(
            @PathVariable Long id
    ) {
        paymentService.deletePayment(id);
        return "Payment deleted successfully";
    }

}