import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user = new User();
msg = '';
  emailId = ''
  userName = ''
  password = ''
  confirmPassword = ''
  pageTitle:string = 'Document Control Portal SignUp for New Use';

  constructor(private router:Router,
    private _service: UserService) { }

 

  ngOnInit(): void {
  }
 submit(){
  this._service.signupUser(this.user).subscribe(
    _data => {
      console.log("Signup Successfull!");
      this.router.navigateByUrl('/login')
     },
     error => {
       console.log("exception occured");
       this.msg = error.error;
       
     }
     )
 }

 cancel():void{
   this.router.navigateByUrl('/home')
 }
}
