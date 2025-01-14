import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,

  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  index = -1;
  student: { age: number; name: string } = {
    age: 0,
    name: ''
  }

  students: { age: number; name: string }[] = [];
  onSubmit() {
    if (this.index == -1) {
      // Create a copy of the student object and add it to the array
      this.students.push({ ...this.student });
    }
    else {
      this.students[this.index] = { ...this.student };
      this.index = -1;
    }

    // Reset the student object
    this.student = {
      age: 0,
      name: ''
    };

  }
  edit(index: number) {
    this.student = { ...this.students[index] };
    this.index = index;
  }
  
  delete(index: number) {
    this.students.splice(index, 1);
  }
}
