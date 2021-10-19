package com.allayuser.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.allayuser.model.CreateDoc;

public interface DocRepository extends JpaRepository<CreateDoc, String>{

	CreateDoc findBydoccontrolNo(String doccontrolNo);



}
