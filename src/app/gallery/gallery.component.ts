import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import data from '../../assets/data.json';
import { SizeService } from '../size.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  public parsedData:{id:number,value:string}[] = data;

  slideConfigMain = {"slidesToShow": 1, "slidesToScroll": 1, "arrows": false, "asNavFor": '.slider-nav', "infinite": false};
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 2, "asNavFor": '.slider-for', "focusOnSelect": true,  "infinite": false};

  selectedSize: String;
  sub: Subscription;

  constructor( private size: SizeService){}

  ngOnInit() {
    this.sub = this.size.currentSize.subscribe(size => this.selectedSize = size);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
