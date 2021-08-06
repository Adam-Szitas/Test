import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  //array for multiple steps
  steps: number[] = [1];

  constructor() { }

  ngOnInit(): void {
  }

  addStep(){
    this.steps.push(1);
  }

  apply(formsParent: Element){

    let filters = Array.from(formsParent.children);
    filters.forEach(element => {
      let form = element.children[0].children[1].children[0] as HTMLFormElement;
      form.submit;

    });
  }

}
