package com.shopflow.userservice.controller;

import com.shopflow.userservice.dto.ProfileResponse;
import com.shopflow.userservice.dto.UserRequest;
import com.shopflow.userservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    public void createUser(
            @RequestBody UserRequest request
    ) {

        userService.createUser(request);

    }

    @GetMapping("/{id}")
    public ProfileResponse getUserById(
            @PathVariable Long id
    ) {

        return userService.getUserById(id);

    }

}