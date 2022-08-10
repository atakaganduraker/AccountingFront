import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { OperationResponseModel } from '../models/operationResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  apiUrl = 'https://localhost:7107/api/operation/getall';

  constructor(private httpClient:HttpClient) { }

  getOperations():Observable<OperationResponseModel>{
    return this.httpClient.get<OperationResponseModel>(this.apiUrl);
       }
  }


