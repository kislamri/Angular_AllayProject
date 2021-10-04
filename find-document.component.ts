import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-find-document',
  templateUrl: './find-document.component.html',
  styleUrls: ['./find-document.component.css']
})
export class FindDocumentComponent implements OnInit {

  filterBy = ''
  documentControlNo = ''
  department = ''
  notFound = true

  pageTitle: string = 'Find Document'; 
  listFilter: string = 'doc';
 
  document: any[] = [
    {
      "filterBy" :"",
      "documentControlNo" : "",
      "department": ""
    }
  ]


  constructor(private router:Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }
submit(){
  console.log('submitted', this.filterBy,
  this.documentControlNo, this.department);
  this.router.navigateByUrl('/filemanagement');
}
newdoc(){
  this.router.navigateByUrl('/addNewDoc')
}

cancel(){
  this.router.navigateByUrl('/home')
}
}
