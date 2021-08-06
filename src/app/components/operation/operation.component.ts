import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  //getting values from parent components and send data back later
  @Input() value: string = '';
  @Input() type: string = '';
  @Output() main = new EventEmitter();
  @Output() off = new EventEmitter();


  showMain: boolean = false;
  showOff: boolean = false;
  operator: string = '';

  changeEvent(parent: Element){
    if(parent.querySelector('input[name="main"]')){
      this.main.emit((<HTMLInputElement>parent.querySelector('input[name="main"]'))?.value);
    }
    if(parent.querySelector('input[name="off"]')){
      this.main.emit((<HTMLInputElement>parent.querySelector('input[name="off"]'))?.value);
    }

  }


  constructor() { }

  ngOnInit(): void {
    console.log(this.type, this.value);

    if(this.type == 'string'){
      this.showMain = true;
    }else{
      if(this.value == 'equal to'){
        this.showMain = true;
      }else{
console.log(this.value);

        switch(this.value){
          case 'in between':{
            this.operator = ' - ';
            break;
          }
          case 'less than':{
            this.operator = ' < ';
            break;
          }
          case 'greater than':{
            this.operator = ' > ';
            break;
          }
        }
          this.showMain = true;
          this.showOff = true;

      }
    }
  }

}
