package com.shopflow.authservice.service;

import com.shopflow.authservice.client.UserClient;
import com.shopflow.authservice.dto.LoginRequest;
import com.shopflow.authservice.dto.RegisterRequest;
import com.shopflow.authservice.dto.UserRequest;
import com.shopflow.authservice.entity.User;
import com.shopflow.authservice.repository.UserRepository;
import com.shopflow.authservice.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UserClient userClient;

    public String register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {

            return "Email already exists";

        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role("USER")
                .build();

        User savedUser = userRepository.save(user);

        UserRequest userRequest = UserRequest.builder()
                .id(savedUser.getId())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .role(savedUser.getRole())
                .build();

        userClient.createUser(userRequest);

        return "User Registered Successfully";

    }

    public String login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {

            return "Invalid Email";

        }

        boolean matches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if (!matches) {

            return "Invalid Password";

        }

        return jwtService.generateToken(
                user.getEmail()
        );

    }

}