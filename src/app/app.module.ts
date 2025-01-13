import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModulePracticeComponent } from './component/ng-module-practice/ng-module-practice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { ReactiveFormComponentComponent } from './component/reactive-form-component/reactive-form-component.component';
import { SpecificationComponent } from './component/specification/specification.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ConfirmationComponent } from './shared/component/confirmation/confirmation.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LifeCycleEventComponentComponent } from './component/life-cycle-event-component/life-cycle-event-component.component';
import { ChildComponentComponent } from './component/child-component/child-component.component';
import { TodoComponentComponent } from './component/todo-component/todo-component.component';
import { TodoComponent } from './component/todo-component/todo/todo.component';
import { TodoListComponent } from './component/todo-component/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NgModulePracticeComponent,
    TemplateFormComponent,
    ReactiveFormComponentComponent,
    SpecificationComponent,
    ConfirmationComponent,
    LifeCycleEventComponentComponent,
    ChildComponentComponent,
    TodoComponentComponent,
    TodoComponent,
    TodoListComponent
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
