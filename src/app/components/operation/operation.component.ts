import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation';
import { HttpClient } from '@angular/common/http'
import { OperationResponseModel } from 'src/app/models/operationResponseModel';

//axios,fetch

@Component({ 
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
//operationResponseModel:OperationResponseModel={};
  operations:Operation[] = [];
  apiUrl = "https://localhost:7107/api/operation/getall";

  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    console.log("init çalıştı");
    //this.httpClient
  }
  
  getOperations(){
     this.httpClient.get<OperationResponseModel>(this.apiUrl)
  }
}
