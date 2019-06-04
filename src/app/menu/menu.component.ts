import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  isUserLoggedIn: boolean = false;
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authentication.isUserLoggedIn();
  }

}
