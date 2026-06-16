package com.shopflow.productservice.controller;

import com.shopflow.productservice.dto.ProductRequest;
import com.shopflow.productservice.dto.ProductResponse;
import com.shopflow.productservice.entity.Product;
import com.shopflow.productservice.service.ProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private static final Logger logger =
            LoggerFactory.getLogger(ProductController.class);

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponse> addProduct(
            @Valid @RequestBody ProductRequest request
    ) {

        logger.info(
                "Adding product : {}",
                request.getName()
        );

        return ResponseEntity.ok(
                productService.addProduct(request)
        );

    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {

        logger.info(
                "Fetching all products"
        );

        return ResponseEntity.ok(
                productService.getAllProducts()
        );

    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(
            @PathVariable Long id
    ) {

        logger.info(
                "Fetching product with id : {}",
                id
        );

        return ResponseEntity.ok(
                productService.getProductById(id)
        );

    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductRequest request
    ) {

        logger.info(
                "Updating product with id : {}",
                id
        );

        return ResponseEntity.ok(
                productService.updateProduct(
                        id,
                        request
                )
        );

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(
            @PathVariable Long id
    ) {

        logger.info(
                "Deleting product with id : {}",
                id
        );

        productService.deleteProduct(id);

        return ResponseEntity.ok(
                "Product deleted successfully"
        );

    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(
            @RequestParam String keyword
    ) {

        logger.info(
                "Searching product : {}",
                keyword
        );

        return ResponseEntity.ok(
                productService.searchProducts(
                        keyword
                )
        );

    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(
            @PathVariable String category
    ) {

        logger.info(
                "Fetching category : {}",
                category
        );

        return ResponseEntity.ok(
                productService.getProductsByCategory(
                        category
                )
        );

    }

}