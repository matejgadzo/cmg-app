import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  slideConfigMain = {"slidesToShow": 1, "slidesToScroll": 1, "arrows": false, "asNavFor": '.slider-nav', "infinite": false};
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 2, "asNavFor": '.slider-for', "focusOnSelect": true,  "infinite": false};

  selectedSize: String = "14 ct";


  constructor() { }


  public parsedData:{id:number,value:string}[] = data;
}
