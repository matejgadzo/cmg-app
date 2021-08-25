import { Component, OnInit } from '@angular/core';

import data from '../../assets/data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public parsedData:{id:number,value:string}[] = data;

}
