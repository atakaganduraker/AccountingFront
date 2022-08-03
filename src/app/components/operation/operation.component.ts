import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/operation';

@Component({ 
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {

  operations:Operation[] = [];

  constructor() {}

  ngOnInit(): void {}
}
