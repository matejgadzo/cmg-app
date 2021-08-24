import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent{

  constructor() { }

  buyNowAlert(event){
    alert("Lorem ipsum dolor sit amet, consectertur adipiscing elit.");
  }
}
