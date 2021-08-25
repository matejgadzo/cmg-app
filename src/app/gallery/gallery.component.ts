import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  slideConfigMain = {"slidesToShow": 1, "slidesToScroll": 1, "asNavFor": '.slider-nav'};
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 12, "arrows": true, "dots": true, "asNavFor": '.slider-for', "focusOnSelect": true};



  constructor() { }

  ngOnInit(): void {
  }

  public parsedData:{id:number,value:string}[] = data;
}
