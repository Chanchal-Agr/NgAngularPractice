import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpecificationForm, SpecificationList } from '../shared/model/specification.model';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpecificationFilter } from '../shared/model/specificationPayload.model';
import { Response } from '../shared/interface/response/generic.model';

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
