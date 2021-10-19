package com.allayuser.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allayuser.model.CreateDoc;
import com.allayuser.model.User;
import com.allayuser.repository.DocRepository;


@Service
public class CreateDocService {

	@Autowired
	
	private DocRepository docRepository;
	
	public CreateDoc saveDoc(CreateDoc createDoc) {
		return docRepository.save(createDoc);
	} 

	public CreateDoc fetchCreateDocByDoccontrolNo(String doccontrolNo) {
		
		return docRepository.findBydoccontrolNo(doccontrolNo);
	}

	public List<CreateDoc> getAllDoc() {
		
		return docRepository.findAll();
}

}
