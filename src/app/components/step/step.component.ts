import { Component, OnInit } from '@angular/core';
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


  constructor(
    private getData: DataService,
    private http: HttpClient
  ) { }

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

}
