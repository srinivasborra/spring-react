package com.test.pwd.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
	
	@Autowired
	private UserRepository userRepository;
	
	public void addUser(UserT user){
		userRepository.save(user);
	}
	
	public List<UserT> getAllUsers(){
		 List<UserT> users = new ArrayList<UserT>();
		 userRepository.findAll().forEach(users :: add);
		return users;
	}
}
