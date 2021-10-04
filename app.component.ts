import { Component } from '@angular/core';
import { UserAuenticationService } from './user-auentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AllayUserLogin';
  isUserLoggedIn: boolean = false;
  isUserLoggedOut: boolean= false;

  constructor(public userAuthenticationService: UserAuenticationService){

  }
  ngOnInit():void{
    this.isUserLoggedIn = this.userAuthenticationService.isUserLoggedIn()
    this.isUserLoggedOut = this.userAuthenticationService.isUserLoggedOut()

  }
}
