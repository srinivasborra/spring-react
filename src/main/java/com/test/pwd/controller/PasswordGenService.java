package com.test.pwd.controller;

import java.util.List;

import org.eclipse.jetty.util.security.Credential;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PasswordGenService {
	@Autowired
	private PasswordGenRepository passwordGenRepository;
	
	public void addPasswordDetails(PasswordGen passwordgen){
		String pwd = passwordgen.getPassword();
		OBFPasswordGenerator pw = "?".equals(pwd)?new OBFPasswordGenerator(pwd):new OBFPasswordGenerator(pwd);
        passwordgen.setObfPassword(pw.obfuscate(pw.toString()));
        passwordgen.setMd5Password(Credential.MD5.digest(pwd));
        System.out.println(passwordgen.toString());
        passwordGenRepository.save(passwordgen);
	}
	
	public List<PasswordGen> getPasswordDetailsByProject(String project){
		return passwordGenRepository.findByProjectId(project);
	}
	
	public List<PasswordGen> findPasswordDetailsByStatus(String status){
		return passwordGenRepository.findPasswordDetailsByStatus(status);
	}
}
