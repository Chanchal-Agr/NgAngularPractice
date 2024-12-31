import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModulePracticeComponent } from './ng-module-practice/ng-module-practice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { SpecificationComponent } from './specification/specification.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NgModulePracticeComponent,
    TemplateFormComponent,
    ReactiveFormComponentComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
