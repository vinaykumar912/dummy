import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
public greetings="";
public chandu="";
public anil="";
public vinay="good";
public status=false;
public boy="boy";
public show=true;
public mychoice="one";

  constructor() { }

  ngOnInit(): void {
  }
onclick(){
  this.greetings="chandu is a good boy";
  
  this.chandu="good boy";
  this.anil="anil anna is a good cricketer";
}
}
