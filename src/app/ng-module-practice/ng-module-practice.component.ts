import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-module-practice',
  standalone: false,
  
  templateUrl: './ng-module-practice.component.html',
  styleUrl: './ng-module-practice.component.css'
})
export class NgModulePracticeComponent {
  name: string = "";
  names: string[] = [];
  index: number = -1;
  submit() {
    
    if (this.index == -1) 
    {
      this.names.push(this.name);
    
    }
    else 
    {
      this.names[this.index]=this.name;
      this.index=-1;
    }
    this.name = "";
    
    
  }
  deleteName(currIndex: number) {
    this.names.splice(currIndex, 1);
  }
  editName(editName: string, currIndex: number) {
    console.log("Edit Name" + editName);
    console.log("index" + currIndex);
    this.name = editName;
    this.index = currIndex;
  }
}
