import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuenticationService {
  /* isUserLoggedOut(): boolean {
    throw new Error('Method not implemented.');
  } */
  username = ''
  password = ''
  constructor() { }

  authenticate(username : string, _password: string){
    if(this.username === '' && this.password ===''){
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)

  }
  isUserLoggedOut(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
}
