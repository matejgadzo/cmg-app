import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SizeService } from '../size.service';

@Component({
  selector: 'app-size-change',
  templateUrl: './size-change.component.html',
  styleUrls: ['./size-change.component.css']
})
export class SizeChangeComponent implements OnDestroy, OnInit{
  sub: Subscription;
  public selectedSize: string;

  constructor(private size: SizeService) { }

  ngOnInit(){
    this.sub = this.size.currentSize.subscribe(size => this.selectedSize = size);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  public options = [
    {id:1, name:"14 ct"},
    {id:2, name:"28 ct"}
  ];

  onSelect(selectedSize: string){
    this.sub = this.size.currentSize.subscribe(size => selectedSize = size);
    console.log(selectedSize);
  }

}
