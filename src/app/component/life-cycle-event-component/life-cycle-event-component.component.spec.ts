import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleEventComponentComponent } from './life-cycle-event-component.component';

describe('LifeCycleEventComponentComponent', () => {
  let component: LifeCycleEventComponentComponent;
  let fixture: ComponentFixture<LifeCycleEventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCycleEventComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
