import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  //visibility: BehaviorSubject<boolean>;

  constructor() {
   // this.visibility = new BehaviorSubject(false);
  }
/* 
  show() {
    this.visibility.next(true);
  }

  hide() {
    this.visibility.next(false);
  } */
}
