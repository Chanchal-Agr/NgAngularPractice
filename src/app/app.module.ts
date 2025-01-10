import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModulePracticeComponent } from './ng-module-practice/ng-module-practice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { SpecificationComponent } from './specification/specification.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ConfirmationComponent } from './shared/component/confirmation/confirmation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LifeCycleEventComponentComponent } from './life-cycle-event-component/life-cycle-event-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NgModulePracticeComponent,
    TemplateFormComponent,
    ReactiveFormComponentComponent,
    SpecificationComponent,
    ConfirmationComponent,
    LifeCycleEventComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
  provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
