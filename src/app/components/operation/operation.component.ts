import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation';
import { OperationResponseModel } from 'src/app/models/operationResponseModel';
import { OperationService } from 'src/app/services/operation.service';

//axios,fetch

@Component({ 
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})

export class OperationComponent implements OnInit {
  operations:Operation[] = [];
  dataLoaded = false;

  constructor(private operationService:OperationService) {}

  ngOnInit(): void {
    this.getOperations();
  }
  
  getOperations(){
    this.operationService.getOperations().subscribe(response=>{
      this.operations = response.data;
      this.dataLoaded = true;

       })

  }
}
