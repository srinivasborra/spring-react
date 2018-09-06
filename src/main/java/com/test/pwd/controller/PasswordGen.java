package com.test.pwd.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity(name="PASSWORDGEN")
public class PasswordGen {
	@Id
	@GeneratedValue
	private Long id;
	private String project;
	private String pwdtype;
	private String idoruser;
	private String password;
	private String passwordstatus;
	private String showcleartext;
	private String obfPassword;
	private String md5Password;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public String getPwdtype() {
		return pwdtype;
	}
	public void setPwdtype(String pwdtype) {
		this.pwdtype = pwdtype;
	}
	public String getIdoruser() {
		return idoruser;
	}
	public void setIdoruser(String idoruser) {
		this.idoruser = idoruser;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPasswordstatus() {
		return passwordstatus;
	}
	public void setPasswordstatus(String passwordstatus) {
		this.passwordstatus = passwordstatus;
	}
	public String getShowcleartext() {
		return showcleartext;
	}
	public void setShowcleartext(String showcleartext) {
		this.showcleartext = showcleartext;
	}
	public String getObfPassword() {
		return obfPassword;
	}
	public void setObfPassword(String obfPassword) {
		this.obfPassword = obfPassword;
	}
	public String getMd5Password() {
		return md5Password;
	}
	public void setMd5Password(String md5Password) {
		this.md5Password = md5Password;
	}
	@Override
	public String toString() {
		return "PasswordGen [id=" + id + ", project=" + project + ", pwdtype=" + pwdtype + ", idoruser=" + idoruser
				+ ", passwordstatus=" + passwordstatus + ", showcleartext=" + showcleartext
				+ ", obfPassword=" + obfPassword + ", md5Password=" + md5Password + "]";
	}
	
}
