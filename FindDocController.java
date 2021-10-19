package com.allayuser.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.allayuser.exception.RecordNotFoundException;
import com.allayuser.model.FindDoc;

import com.allayuser.service.FindDocService;

@RestController
public class FindDocController {

	@Autowired
	private FindDocService docService;
	
	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping("/finddoc")
	ResponseEntity<List<FindDoc>>getAllDoc(){
		return new ResponseEntity<>(docService.getAllDoc(), HttpStatus.OK);
	}
	
	@GetMapping("/finddoc/{filter}")
	public ResponseEntity<FindDoc>getByFilter(@PathVariable String filterBy) throws RecordNotFoundException{
		Optional<FindDoc> findDoc =((FindDocService) docService).getfilterBy(filterBy);
		if(findDoc.isPresent()) {
			return new ResponseEntity<>(findDoc.get(), HttpStatus.OK);
		}else {
			throw new RecordNotFoundException();
		}
		
	}
	
	@GetMapping("finddoc/{doccontrolNo}")
	public ResponseEntity<FindDoc>getByDocControlNo(@PathVariable String doccontrolNo) throws RecordNotFoundException{
		Optional<FindDoc> _findDoc=((FindDocService) docService).getDocControlNoBy(doccontrolNo);
		if(_findDoc.isPresent()) {
			return new ResponseEntity<>(_findDoc.get(), HttpStatus.OK);
		}else {
			throw new RecordNotFoundException();
		}
	} 
}
