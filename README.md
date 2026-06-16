# ShopFlow

Production-quality full-stack e-commerce application built using Java, Spring Boot Microservices, React, Kafka, Docker, and MySQL.

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.5
- Maven
- Spring Security
- JWT
- BCrypt
- Validation
- OpenFeign
- Kafka
- Docker
- MySQL
- Swagger

### Architecture
- Eureka Server
- Config Server
- API Gateway
- Auth Service
- User Service
- Product Service
- Cart Service
- Order Service
- Payment Service
- Notification Service

### Frontend
- React
- Vite
- Tailwind CSS
- Context API
- Axios
- React Router DOM
- Lucide Icons

## Kafka Flow

```text
Payment Service
↓
Producer
↓
payment-success-topic
↓
Notification Service
↓
Consumer
↓
Database
```

## Docker Containers

- MySQL
- phpMyAdmin
- Zookeeper
- Kafka

## Features

- Authentication with JWT
- BCrypt Password Encryption
- Product Management
- Cart Management
- Order Management
- Payment Flow
- Kafka Event Driven Notifications
- Swagger API Documentation
- Dockerized Setup
- Microservices Architecture

## Folder Structure

```text
ShopFlow
│
├── frontend
├── backend
└── docker-compose.yml
```

## Status

Project Completion: 98%