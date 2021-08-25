import { Component } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent{
  public parsedData:{id:number,value:string}[] = data;

  public alertText = this.parsedData[1].value;
  constructor() {}

  buyNowAlert(event){

    alert(this.alertText);

  }
}
