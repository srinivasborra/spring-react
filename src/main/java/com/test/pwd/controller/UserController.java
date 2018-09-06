package com.test.pwd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@Autowired
	private UserServices userService;
	@Autowired
	private PasswordGenService pwdService;
	
	@RequestMapping("/users")
	public List<UserT> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/user")
	public void addUser(@RequestBody UserT user){
		userService.addUser(user);
	}
	
	
	@RequestMapping(method=RequestMethod.POST,value="/passwords")
	public void addPasswordDetails(@RequestBody PasswordGen passwordgen){
		pwdService.addPasswordDetails(passwordgen);
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/passwords/project/{project}")
	public List<PasswordGen> findPwdByProject(@PathVariable String project){
		return pwdService.getPasswordDetailsByProject(project);
	}
	@RequestMapping(method=RequestMethod.GET,value="/passwords/{status}")
	public List<PasswordGen> findPwdByStatus(@PathVariable String status){
		return pwdService.findPasswordDetailsByStatus(status);
	}
}
