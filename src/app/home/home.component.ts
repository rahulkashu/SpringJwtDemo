import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild ('myForm') loginForm:NgForm;

  constructor() { }

  ngOnInit() {
  }
  
    
  actionOnSubmit(){
    debugger;
    console.log('Successful registration');
    console.log(this.loginForm);
    
  }
  
}
