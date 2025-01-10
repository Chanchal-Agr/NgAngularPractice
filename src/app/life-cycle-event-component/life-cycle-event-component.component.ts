import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-event-component',
  standalone: false,

  templateUrl: './life-cycle-event-component.component.html',
  styleUrl: './life-cycle-event-component.component.css'
})
export class LifeCycleEventComponentComponent implements OnInit {

  public arbitraryData: string;

  constructor() {
    console.log("CONSTRUCTER CALLED")
    this.arbitraryData = 'initial';
    console.log("arbitraryData initial value set")
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }


  ngOnInit(): void {
    console.log("ngOnInit called");
  }

}
