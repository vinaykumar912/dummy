import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.css']
})
export class New1Component implements OnInit {
public array=[
  {"id":1 , "name":"vinay" , "course":"Angular"},
  {"id":2 , "name":"busha" , "course":"React"}
];
  constructor() { }

  ngOnInit(): void {
  }

}
