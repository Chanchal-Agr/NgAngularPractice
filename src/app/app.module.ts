import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './component/home-component/template-form/template-form.component';
import { ReactiveFormComponentComponent } from './component/home-component/reactive-form-component/reactive-form-component.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ConfirmationComponent } from './shared/component/confirmation/confirmation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LifeCycleEventComponentComponent } from './component/home-component/life-cycle-event-component/life-cycle-event-component.component';
import { ChildComponentComponent } from './component/home-component/child-component/child-component.component';
import { TodoComponentComponent } from './component/todo-component/todo-component.component';
import { TodoComponent } from './component/todo-component/todo/todo.component';
import { TodoListComponent } from './component/todo-component/todo-list/todo-list.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { SpecificationComponent } from './component/home-component/specification/specification.component';
import { NgModulePracticeComponent } from './component/home-component/ng-module-practice/ng-module-practice.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponentComponent,
    ConfirmationComponent,
    LifeCycleEventComponentComponent,
    ChildComponentComponent,
    TodoComponentComponent,
    TodoComponent,
    TodoListComponent,
    NavbarComponent,
    HomeComponentComponent,
    SpecificationComponent,
    NgModulePracticeComponent,
    RegistrationFormComponent
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
