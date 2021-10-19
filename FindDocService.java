package com.allayuser.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.allayuser.model.FindDoc;
import com.allayuser.repository.FindDocRepository;

@Service
public class FindDocService {
	
	@Autowired
	
	private FindDocRepository findDocRepository;
	
	public List<FindDoc> getAllDoc(){
		return findDocRepository.findAll();
	}

	public Optional<FindDoc> getfilterBy(String filterBy) {
		// TODO Auto-generated method stub
		return null;
	}

	public Optional<FindDoc> getDocControlNoBy(String doccontrolNo) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	

}
