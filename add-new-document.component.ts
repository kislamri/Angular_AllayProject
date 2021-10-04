import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-document',
  templateUrl: './add-new-document.component.html',
  styleUrls: ['./add-new-document.component.css']
})
export class AddNewDocumentComponent implements OnInit {

  documentControlNo = ''
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
     private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  submit(){
    console.log('submitted', this.createdBy,
    this.documentControlNo, this.department,
    this.checkedBy, this.approvedBy);
    this.router.navigateByUrl('/addNewDoc');
  }

  cancel(){
    this.router.navigateByUrl('/home')
  }
}
