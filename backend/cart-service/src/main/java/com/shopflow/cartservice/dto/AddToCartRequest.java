package com.shopflow.cartservice.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AddToCartRequest {

    private Long userId;

    private Long productId;

    private Integer quantity;

}