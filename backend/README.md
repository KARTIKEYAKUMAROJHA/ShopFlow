# ShopFlow

## Full Stack Microservices E-Commerce Application

ShopFlow is a production-style full stack e-commerce application built using React, Spring Boot Microservices, Kafka, Docker, MySQL and Eureka Service Discovery.

---

# Frontend

### Technologies

* React
* Vite
* Tailwind CSS
* JavaScript
* Context API
* React Router DOM
* Axios
* Lucide React

### NPM Packages

```bash
npm install react-router-dom
npm install axios
npm install lucide-react
```

### Frontend Features

* Home Page
* Products Page
* Search Products
* Category Filter
* Product Details
* Add To Cart
* Remove From Cart
* Checkout Page
* Orders Page
* Profile Page
* Register Page
* Login Page
* Admin Dashboard
* Product Management
* Order Management
* User Management
* Responsive UI
* Glassmorphism Theme

---

# Backend

### Technologies

* Java 17
* Spring Boot 3
* Spring Data JPA
* Spring Validation
* Spring Cloud
* OpenFeign
* Kafka
* Eureka Server
* API Gateway
* Swagger
* MySQL
* Docker
* Maven
* Lombok

---

# Microservices

* service-registry
* api-gateway
* auth-service
* user-service
* product-service
* cart-service
* order-service
* payment-service
* notification-service
* config-server

---

# Product Service Features

* Add Product
* Get All Products
* Get Product By Id
* Update Product
* Delete Product
* Search Product
* Category Filter
* Validation
* Exception Handling
* Logging
* Swagger Documentation

---

# Order Service

* Place Order
* Order Persistence
* MySQL Integration

---

# Payment Service

* Process Payment
* Payment Success Handling
* Kafka Producer
* Swagger Documentation

---

# Notification Service

* Kafka Consumer
* Save Notification
* MySQL Integration
* Event Driven Architecture

---

# Event Flow

Order Service
→ Payment Service
→ Kafka Producer
→ payment-success-topic
→ Notification Service
→ Kafka Consumer
→ Notification Saved

---

# Database

MySQL 8

Databases

* shopflow_product_db
* shopflow_order_db
* shopflow_payment_db
* shopflow_notification_db

---

# Docker Containers

* mysql
* phpmyadmin
* zookeeper
* kafka

Run:

```bash
docker compose up -d
```

Check:

```bash
docker ps
```

---

# Service Discovery

Eureka Server

```
http://localhost:8761
```

---

# Swagger URLs

Product Service

```
http://localhost:8083/swagger-ui/index.html
```

Payment Service

```
http://localhost:8086/swagger-ui/index.html
```

---

# Tech Stack

Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Context API

Backend

* Java 17
* Spring Boot 3
* Spring Cloud
* OpenFeign
* Kafka
* Docker
* MySQL
* Swagger
* Eureka

---

# Architecture

React Frontend

↓

API Gateway

↓

Microservices

↓

MySQL

↓

Kafka Event Driven Communication

---

# Project Type

Production Style Full Stack E-Commerce Application

---

# Author

Kartikeya Kumar Ojha
