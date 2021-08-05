import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private go = new BehaviorSubject('');

  data: any = this.go.asObservable();

  constructor(
  ) { }

  changeData(Data: any){
    this.go.next(Data);
  }
}

//I am using this type of service often so I just copied some parts of them
