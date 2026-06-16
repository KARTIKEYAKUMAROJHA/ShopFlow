package com.shopflow.productservice.service;

import com.shopflow.productservice.dto.ProductRequest;
import com.shopflow.productservice.dto.ProductResponse;
import com.shopflow.productservice.entity.Product;
import com.shopflow.productservice.exception.ResourceNotFoundException;
import com.shopflow.productservice.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public ProductResponse addProduct(ProductRequest request) {

        Product product = Product.builder()
                .name(request.getName())
                .description(request.getDescription())
                .price(request.getPrice())
                .category(request.getCategory())
                .imageUrl(request.getImageUrl())
                .build();

        Product savedProduct = productRepository.save(product);

        return mapToResponse(savedProduct);
    }

    public List<Product> getAllProducts() {

        return productRepository.findAll();

    }

    public Product getProductById(Long id) {

        return productRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Product not found with id : " + id
                        )
                );

    }

    public Product updateProduct(
            Long id,
            ProductRequest request
    ) {

        Product product = productRepository.findById(id)
                .orElseThrow(
                        () -> new ResourceNotFoundException(
                                "Product not found with id : " + id
                        )
                );

        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setPrice(request.getPrice());
        product.setCategory(request.getCategory());
        product.setImageUrl(request.getImageUrl());

        return productRepository.save(product);

    }

    public void deleteProduct(Long id) {

        if (!productRepository.existsById(id)) {

            throw new ResourceNotFoundException(
                    "Product not found with id : " + id
            );

        }

        productRepository.deleteById(id);

    }

    public List<Product> searchProducts(String keyword) {

        return productRepository.findByNameContainingIgnoreCase(keyword);

    }

    public List<Product> getProductsByCategory(String category) {

        return productRepository.findByCategoryIgnoreCase(category);

    }

    private ProductResponse mapToResponse(Product product) {

        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .category(product.getCategory())
                .imageUrl(product.getImageUrl())
                .build();

    }

}