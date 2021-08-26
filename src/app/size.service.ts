import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

Injectable()
export class SizeService {

  private messageSource = new BehaviorSubject('14 ct');
  currentSize = this.messageSource.asObservable();

  constructor() { }

  changeMessage(size: string) {
    this.messageSource.next(size);
    console.log(size);
  }
}
