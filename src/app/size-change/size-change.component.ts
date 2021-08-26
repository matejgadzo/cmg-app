import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-change',
  templateUrl: './size-change.component.html',
  styleUrls: ['./size-change.component.css']
})
export class SizeChangeComponent {

  constructor() { }
  public selectedSize: String;

  public options = [
    {id:1, name:"14 ct"},
    {id:2, name:"28 ct"}
  ]

}
