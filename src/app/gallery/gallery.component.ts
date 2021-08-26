import { Component } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  public parsedData: { id: number; value: string }[] = data;

  public alertText = this.parsedData[1].value;

  slideConfigMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    infinite: false,
  };
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    infinite: false,
  };

  selectedSize = '14 ct';

  public options = [
    { id: 1, name: '14 ct' },
    { id: 2, name: '28 ct' },
  ];

  constructor() {}

  onChange(changed: any) {
    this.selectedSize = changed.name;
  }

  buyNowAlert() {
    alert(this.alertText);
  }
}
