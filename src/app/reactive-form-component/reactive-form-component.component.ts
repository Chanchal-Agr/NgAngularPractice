import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  standalone: false,

  templateUrl: './reactive-form-component.component.html',
  styleUrl: './reactive-form-component.component.css'
})
export class ReactiveFormComponentComponent {

  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  })
  formObject: any;
  submit() {
    this.formObject = this.studentForm;
  }
}
