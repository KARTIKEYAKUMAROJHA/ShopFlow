package com.shopflow.cartservice.service;

import com.shopflow.cartservice.dto.AddToCartRequest;
import com.shopflow.cartservice.entity.CartItem;
import com.shopflow.cartservice.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    public CartItem addToCart(AddToCartRequest request) {

        CartItem item = CartItem.builder()
                .userId(request.getUserId())
                .productId(request.getProductId())
                .quantity(request.getQuantity())
                .build();

        return cartRepository.save(item);

    }

    public List<CartItem> getUserCart(Long userId) {

        return cartRepository.findByUserId(userId);

    }

}