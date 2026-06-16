package com.shopflow.orderservice.service;

import com.shopflow.orderservice.dto.PlaceOrderRequest;
import com.shopflow.orderservice.entity.Order;
import com.shopflow.orderservice.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order placeOrder(
            PlaceOrderRequest request
    ) {

        Order order = Order.builder()
                .userId(request.getUserId())
                .totalAmount(request.getTotalAmount())
                .status("PLACED")
                .orderDate(LocalDateTime.now())
                .build();

        return orderRepository.save(order);

    }

    public List<Order> getOrdersByUserId(
            Long userId
    ) {

        return orderRepository.findByUserId(userId);

    }

}