import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpecificationForm, SpecificationList } from '../model/response/specification.model';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpecificationFilter } from '../model/request/specificationPayload.model';
import { Response } from '../../shared/response/generic.model';

@Injectable({
  providedIn: 'root'
})
export class SpecificationService {

  private baseUrl: string = "https://localhost:7048/api/Specification/";


  constructor(private http: HttpClient) { }

  //Dependency injection using inject
  //http = inject(HttpClient);

  public getAll(payload: SpecificationFilter) {
    return this.http.post<Response<SpecificationList>>(`${this.baseUrl}GetAll`, payload);
  }

}
