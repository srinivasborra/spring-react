package com.test.pwd.controller;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PasswordGenRepository extends CrudRepository<PasswordGen, Long> {
	
	@Query(value="SELECT * FROM passwordgen p where p.passwordstatus=1 and p.project= :project",nativeQuery=true)
	public List<PasswordGen> findByProjectId(@Param("project") String project);
	
	@Query(value="SELECT * FROM passwordgen p where p.passwordstatus=:passwordstatus",nativeQuery=true)
	public List<PasswordGen> findPasswordDetailsByStatus(@Param("passwordstatus") String status);
}
