import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface formInterface {
  firstName: FormControl<string | null>,
  lastName: FormControl<string | null>
}

@Component({
  selector: 'app-reactive-form-component',
  standalone: false,
  templateUrl: './reactive-form-component.component.html',
  styleUrl: './reactive-form-component.component.css'
})

export class ReactiveFormComponentComponent {
  public studentForm: FormGroup<formInterface> = new FormGroup<formInterface>({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required)
  })

  submit() {
    this.studentForm.markAllAsTouched();
    if(this.studentForm.valid){
      const data = this.studentForm.value;
      console.log(data)
    }
  }
}
