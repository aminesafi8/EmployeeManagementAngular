import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


 message :string;
  
  constructor() { }

  ngOnInit() {
  
    this.message ="Welcome to Skander Pato ( Shoobi Shoobi ) Angular Application!";
  }

}
