import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpecificationForm, SpecificationList } from '../model/response/specification.model';
import { SpecificationService } from '../service/specification.service';
import { SpecificationFilter } from '../model/request/specificationPayload.model';

@Component({
  selector: 'app-specification',
  standalone: false,
  templateUrl: './specification.component.html',
  styleUrl: './specification.component.css'
})

export class SpecificationComponent {

  public payload: SpecificationFilter = {
    isPaginate: false,
    pageNumber: 1,
    top: 100,
    orderBy: null,
    search: null,
    startDate: null,
    endDate: null
  }


  constructor(private specificationService: SpecificationService) {
    this.getAll();
  }

  public specificationList: SpecificationList[] = []
  public specificationForm: FormGroup<SpecificationForm> = new FormGroup<SpecificationForm>({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
  submit() {
    this.specificationForm.markAllAsTouched();
    this.getAll();
    //  if(this.specificationForm.valid){
    //    console.log(this.specificationForm.value);
    //    this.specificationService.addDept(this.specificationForm.value as SpecificationList).subscribe((res: any) => {
    //      if (res.result) {
    //        this.specificationForm.reset();
    //        alert(res.message)
    //     }
    //     else {
    //        alert(res.message)
    //       }
    //     })
    //  }
  }
  getAll() {
    this.specificationService.getAll(this.payload).subscribe({
      next: (res) => {
        console.log(res.success);
        if (res.success) {
          this.specificationList = res.data?.iterableData!;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })

  }
}
