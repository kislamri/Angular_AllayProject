package com.allayuser.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.allayuser.exception.RecordNotFoundException;
import com.allayuser.model.User;
import com.allayuser.service.UserService;

@RestController


public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/signupUser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User signupUser(@RequestBody User user) throws Exception {
		String emailId = user.getEmailId();
		if(emailId != null && !"".equals(emailId)) {
			User userObj = service.fetchUserByEmailId(emailId);
			if(userObj !=null) {
				throw new Exception("user with " + emailId + " is alrady exist");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}

	
	 @PostMapping("/login")
	 @CrossOrigin(origins = "http://localhost:4200")
	 
	public User loginUser(@RequestBody User user) throws Exception {
		//If user present in database the login will successful
		//else throw the exception that user is not exist or Invalid credential.
		
		//Retrieve user Email id and password
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		
		User userObj = null;
		
		if(tempEmailId !=null & tempPass !=null) {
			userObj =service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
			
		}
		if (userObj == null) {
			throw new Exception("Invalid credentials!Please try again!");
		}
		return userObj;
	}
	 
	 @GetMapping("/all")
		 ResponseEntity<List<User>>getAllUser(){
			return new ResponseEntity<>(service.getAllUser(), HttpStatus.OK);
			
		 }
	 @GetMapping("/all/{id}")
	 public ResponseEntity<User>getById(@PathVariable long id) throws RecordNotFoundException{
		 
		 Optional<User> user = ((UserService) service).getById(id);
		 if(user.isPresent()) {
			 return new ResponseEntity<>(user.get(), HttpStatus.OK);
		 }else {
			 throw new RecordNotFoundException();
		 } 
	 }
	 
	@PutMapping("/all/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") int id, @RequestBody User user){
		Optional<User> userData = service.findById(id);
		if(userData.isPresent()) {
			User _user = userData.get();
			_user.setEmailId(user.getEmailId());
			_user.setPassword(user.getPassword());
			_user.setUserName(user.getUserName());
			return new ResponseEntity<>(service.saveUser(_user), HttpStatus.OK);
		}
		
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//Delete method is not working currently
	@DeleteMapping("/all/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable("id") int id){
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	

	}
	
