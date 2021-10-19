import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Newdocument } from '../newdocument';
import { NewdocumentService } from '../newdocument.service';

@Component({
  selector: 'app-add-new-document',
  templateUrl: './add-new-document.component.html',
  styleUrls: ['./add-new-document.component.css']
})
export class AddNewDocumentComponent implements OnInit {
/*
  newdocument: Newdocument = {
    documentControlNo: '',
    department: '',
    createdBy :'',
    checkedBy: '',
    approvedBy: ''
  }; */
  submitted = false;
newDoc = new Newdocument();
msg = '';
  doccontrolNo = ''
  department = ''
  createdBy = ''
  checkedBy = ''
  approvedBy = ''
  notFound = true

  pageTitle: string = 'Find Document';
  listFilter : string = 'doc';

  
  constructor(
    private router:Router,
    private route: ActivatedRoute,
     private formBuilder: FormBuilder,

     private newdocumentService : NewdocumentService

  ) { }

  ngOnInit(): void {
  }
 /*  submit(){
    console.log('submitted', this.createdBy,
    this.documentControlNo, this.department,
    this.checkedBy, this.approvedBy);
    this.router.navigateByUrl('/addNewDoc');codco
  } */

submit(){
  this.newdocumentService.createDoc(this.newDoc).subscribe(
    _data =>{
      console.log("Document created Successfully")
      this.router.navigateByUrl('/addNewDoc')
    },
    error => {
      console.log("Exception Occured! Document is not created!");
      this.msg = error.error;
    }
    
  )
}
  cancel(){
    this.router.navigateByUrl('/home')
  }
/*
saveDocument(): void{
  const data = {
    documentControlNo: this.newdocument.documentControlNo,
    department: this.newdocument.documentControlNo,
    createdBy: this.newdocument.createdBy,
    checkedBy: this.newdocument.createdBy,
    approvedBy: this.newdocument.approvedBy
  };

  this.newdocumentService.create(data)
  .subscribe(
    response => {
      console.log(response);
      this.submitted = true;
    }
   );

  }*/
  
}


