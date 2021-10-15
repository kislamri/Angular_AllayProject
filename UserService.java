package com.allayuser.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.allayuser.model.User;
import com.allayuser.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	public User fetchUserByEmailId(String email) {
		return userRepository.findByEmailId(email);
	}

	public User fetchUserByEmailIdAndPassword(String email, String password) {
		return userRepository.findByEmailIdAndPassword(email, password);
	}


	public List<User> getAllUser() {
		
			return userRepository.findAll();
	}

	

	public Optional<User> getById(long id) {
	
		return userRepository.findById((int) id);
	}

	public ResponseEntity<User> upateById(long parseLong, User userobj) {
		
		return null;
	}

	public Optional<User> findById(int id) {
		
		return userRepository.findById(id);
	}

	

	

}