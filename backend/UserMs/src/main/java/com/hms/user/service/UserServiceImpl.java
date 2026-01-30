package com.hms.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hms.user.dto.UserDTO;
import com.hms.user.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    Private PasswordEncoder passwordEncoder;

    @Override
    public void registerUser(UserDTO userDTO) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public UserDTO loginUser(UserDTO userDTO) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public UserDTO getUserById(Long id) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
