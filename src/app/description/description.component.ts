import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json'
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public parsedData:{id:number,value:string}[] = data;

}
