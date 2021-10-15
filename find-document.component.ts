import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindDocument } from '../find-document';

@Component({
  selector: 'app-find-document',
  templateUrl: './find-document.component.html',
  styleUrls: ['./find-document.component.css']
})
export class FindDocumentComponent implements OnInit {

  filterBy = 'Enter(A-Z as index)'
  documentControlNo = ''
  department = ''
  notFound = true

  pageTitle: string = 'Find Document'; 
  listFilter: string = 'doc';
 
  FindDocuments!: FindDocument[];

/*   document: any[] = [
    {
      "filterBy" :"",
      "documentControlNo" : "",
      "department": ""
    }
  ]
 */

  constructor(private router:Router,
    private route: ActivatedRoute,
    private httpClient : HttpClient,
 
    ) { }

  ngOnInit(){
    this.httpClient.get('/assets/findDocument.json').subscribe(()=>{
     
    })
    
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

function result(result: any, arg1: any) {
  throw new Error('Function not implemented.');
}
