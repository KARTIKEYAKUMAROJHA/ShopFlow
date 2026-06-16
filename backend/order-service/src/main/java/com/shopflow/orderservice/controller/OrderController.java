package com.shopflow.orderservice.controller;

import com.shopflow.orderservice.dto.PlaceOrderRequest;
import com.shopflow.orderservice.entity.Order;
import com.shopflow.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public Order placeOrder(
            @RequestBody PlaceOrderRequest request
    ) {

        return orderService.placeOrder(request);

    }

    @GetMapping("/{userId}")
    public List<Order> getOrdersByUserId(
            @PathVariable Long userId
    ) {

        return orderService.getOrdersByUserId(userId);

    }

}