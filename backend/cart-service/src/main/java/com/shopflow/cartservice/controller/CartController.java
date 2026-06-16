package com.shopflow.cartservice.controller;

import com.shopflow.cartservice.dto.AddToCartRequest;
import com.shopflow.cartservice.entity.CartItem;
import com.shopflow.cartservice.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping
    public CartItem addToCart(
            @RequestBody AddToCartRequest request
    ) {

        return cartService.addToCart(request);

    }

    @GetMapping("/{userId}")
    public List<CartItem> getUserCart(
            @PathVariable Long userId
    ) {

        return cartService.getUserCart(userId);

    }

}