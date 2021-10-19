package com.allayuser.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class CreateDoc {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String doccontrolNo;
	private String department;
	private String createdBy;
	private String checkedBy;
	private String approvedBy;
	

	public CreateDoc() {}
	

	public CreateDoc(int id, String doccontrolNo, String department, String createdBy, String checkedBy,
			String approvedBy) {
		super();
		this.id = id;
		this.doccontrolNo = doccontrolNo;
		this.department = department;
		this.createdBy = createdBy;
		this.checkedBy = checkedBy;
		this.approvedBy = approvedBy;
	}



	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
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


	public String getCreatedBy() {
		return createdBy;
	}


	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}


	public String getCheckedBy() {
		return checkedBy;
	}


	public void setCheckedBy(String checkedBy) {
		this.checkedBy = checkedBy;
	}


	public String getApprovedBy() {
		return approvedBy;
	}


	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}


	@Override
	public String toString() {
		return "CreateDoc [id=" + id + ", doccontrolNo=" + doccontrolNo + ", department=" + department + ", createdBy="
				+ createdBy + ", checkedBy=" + checkedBy + ", approvedBy=" + approvedBy + "]";
	}


	

}