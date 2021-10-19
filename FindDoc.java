package com.allayuser.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FindDoc {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String filterBy;
	private String doccontrolNo;
	private String department;
	
	public FindDoc() {}
	
	

	public FindDoc(String filterBy, String doccontrolNo, String department) {
		super();
		this.filterBy = filterBy;
		this.doccontrolNo = doccontrolNo;
		this.department = department;
	}



	public String getFilterBy() {
		return filterBy;
	}

	public void setFilterBy(String filterBy) {
		this.filterBy = filterBy;
	}

	public String getDoccontrolNo() {
		return doccontrolNo;
	}

	public void setDoccontrolNo(String doccontrolNo) {
		this.doccontrolNo = doccontrolNo;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}



	@Override
	public String toString() {
		return "FindDoc [filterBy=" + filterBy + ", doccontrolNo=" + doccontrolNo + ", department=" + department + "]";
	}
	
	
	

}
