package com.shopflow.userservice.service;

import com.shopflow.userservice.dto.ProfileResponse;
import com.shopflow.userservice.dto.UserRequest;
import com.shopflow.userservice.entity.User;
import com.shopflow.userservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void createUser(UserRequest request) {

        User user = User.builder()
                .id(request.getId())
                .name(request.getName())
                .email(request.getEmail())
                .role(request.getRole())
                .build();

        userRepository.save(user);

    }

    public ProfileResponse getUserById(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow();

        return ProfileResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .build();

    }

}