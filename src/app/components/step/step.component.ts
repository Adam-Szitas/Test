import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { StepsIF } from 'src/app/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  //create the schema for data to store in
  //create even the interface and import it
  steps: StepsIF = {
    name: '',
    attribute: '',
    operation: {
      type: '',
      value: 'operation'
    },
    valueMain: 0,
    valueOff: 0
  };

  //create variable for subscription and data for the data storing
  subscription!: Subscription;
  data!: any;

  //create array for ngfor attributes
  attributeElements:number[] = [0];

  //we can show operations using boolean and ngIf
  showOperations: boolean = false;





  constructor(
    private getData: DataService,
    private http: HttpClient
  ) { }


  //creating host listener for getting the clicks
  @HostListener('click', ['$event.target'])
  getClick(element: HTMLElement):void{

    if(element.classList.contains('toggle') || element.closest('.toggle')){
      this.toggleOperations(true);
      this.steps.operation.type = '';
    }else{
      this.toggleOperations(false);
    }

    if(element.classList.contains('operator') && element.getAttribute('type') && element.textContent){
      this.steps.operation.type = element.getAttribute('type');
      this.steps.operation.value = element.textContent;
      console.log('operation type: ', this.steps.operation.type);
    }

    console.log(this.steps);



    // if(element.id)
    // console.log(element.id);

    // console.log(element.classList.contains('step-form'));


  }

  ngOnInit(): void {
    const httpHeader = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-type': 'application/json'
      })
    }

    this.http.get(`${env.API_URL}`, httpHeader).subscribe(
      (result: any) => {
        this.getData.changeData(result);
      },
      (error) => {
        console.log(error);
      }
    )

    this.subscription = this.getData.data.subscribe(
      (data: any) => {
        this.data = data
      }
    );
  }

  //toggle hidden tabs
  toggleOperations(show:boolean){
    this.showOperations = show;
  }




}
