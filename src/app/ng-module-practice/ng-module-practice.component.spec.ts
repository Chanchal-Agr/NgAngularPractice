import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModulePracticeComponent } from './ng-module-practice.component';

describe('NgModulePracticeComponent', () => {
  let component: NgModulePracticeComponent;
  let fixture: ComponentFixture<NgModulePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgModulePracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModulePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
