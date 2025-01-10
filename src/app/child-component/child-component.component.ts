import { Component, Input, OnChanges,  SimpleChanges,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: false,
  
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent implements OnChanges,OnInit,OnDestroy {
    ngOnDestroy(): void {
      console.log("child component destroyed.");
    }
    ngOnInit(): void {
      console.log("init method from child component.");
    }
  
    @Input() data: string='';
    count: number = 0;
    
    ngOnChanges(changes:SimpleChanges) {
      // console.log(changes);
      this.count++;
      console.log(this.count);

  }
}
