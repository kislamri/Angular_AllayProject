import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newdocument } from './newdocument';


//const baseUrl = 'http://localhost:8080/createDoc';
@Injectable({
  providedIn: 'root'
})
export class NewdocumentService {

  constructor(private http: HttpClient) { }

 

  public createDoc(newDoc : Newdocument): Observable<any>{
   return this.http.post('http://localhost:8080/createDoc', newDoc)
  }


  
  //getAll():Observable<Newdocument[]>{
   // return this.http.get<Newdocument[]>(baseUrl)
 // }

  //get(documentControlNo:any) :Observable<Newdocument>{
    //return this.http.get('${baseUrl}/${id}');
  //}

 //create(data: any) : Observable<any>{
   // return this.http.post("http://localhost:8080/createDoc", data);
 // }

 // update(documentControlNo: any, data: any): Observable<any>{
  //  return this.http.put('${baseUrl}/${id}', data);
  //}

  //delete(documentControlNo: any) : Observable<any>{
    //return this.http.delete('${baseUrl} /${id}');
 // }
}
