import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserAuenticationService } from '../user-auentication.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  username = ''
  password = ''
  emailFormControl = new FormControl('',[Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)])
  user = new User();
  msg = '';


  constructor(private _service : UserService,
    private router:Router,
    
     private formBuilder: FormBuilder,
     public userauthenticationService: UserAuenticationService
     
    ) { }
  
  loginForm : FormGroup | undefined;
  isSubmitted = false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    this._service.loginUser(this.user).subscribe(
      _data => {
        console.log("login Successfull!");
        this.router.navigate(['/finddoc'])
    },
      _error => {console.log("Excepiton occured");
      this.msg = "Bad credentials, Please enter valid emailId and password!"  
  } 
    )}
    

  cancel(){
    this.router.navigateByUrl('/home')

  }

}
