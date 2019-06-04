import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }


  authenticate(login, password) {
    if (login === 'admin' && password === 'admin') {

      sessionStorage.setItem('authenticatedUser', login);
      sessionStorage.setItem('role', 'ROLE_ADMIN');

       return true;

    }
    return false;
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }


  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('role');
  }
}
