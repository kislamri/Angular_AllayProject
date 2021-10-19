package com.allayuser.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.allayuser.model.CreateDoc;

import com.allayuser.service.CreateDocService;

@RestController
public class CreateDocController {
	
	@Autowired
	private CreateDocService createService ;
	
	@PostMapping("/createDoc")
	@CrossOrigin(origins = "http://localhost:4200")
	public CreateDoc createDoc(@RequestBody CreateDoc createDoc) throws Exception{
		
		String doccontrolNo = createDoc.getDoccontrolNo();
		if(doccontrolNo != null && !"".equals(doccontrolNo)) {
			CreateDoc docObj = createService.fetchCreateDocByDoccontrolNo(doccontrolNo);
			if(docObj != null) {
				throw new Exception("Doccument with " + doccontrolNo + " is alreay exist");
			}
		}
		CreateDoc docObj = null;
		docObj = createService.saveDoc(createDoc);
		return docObj;
	}
	
	 @GetMapping("/alldoc")

	 ResponseEntity<List<CreateDoc>> getAllDoc(){
		 return new ResponseEntity<>(createService.getAllDoc(), HttpStatus.OK);
	 }
	

}
