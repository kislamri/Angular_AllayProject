import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver')
@Component({
  selector: 'app-filemanagement',
  templateUrl: './filemanagement.component.html',
  styleUrls: ['./filemanagement.component.css']
})
export class FilemanagementComponent implements OnInit {
  pdfFiles = [
    {
      name: 'SOP001',
      startPage: 1,
      path : './assets/SOP001.pdf'
    },

    {
      name: 'SOP002',
      startPage: 1,
      path : './assets/SOP002.pdf'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
  downloadPdf(pdfUrl: string, pdfName: string){

    FileSaver.saveAs(pdfUrl, pdfName);
  
  }

  openDoc(pdfUrl:string, startPage: number){
    window.open(pdfUrl = '#page=' + startPage, '_blank', '', true)
  }

}
