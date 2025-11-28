package com.edtest.edbackend.service;

import com.edtest.edbackend.entity.Address;
import com.edtest.edbackend.entity.User;
import com.edtest.edbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

    public User createUser(User user) {
        if (user.getAddresses() != null && !user.getAddresses().isEmpty()) {
            for (Address address : user.getAddresses()) {
                address.setUser(user);
            }
        }
        return userRepository.save(user);
    }

    public void deleteUser (Long id){
        userRepository.deleteById(id);
    }

}
