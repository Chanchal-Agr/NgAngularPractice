import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './component/todo-component/todo/todo.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { RegistrationFormComponent } from './component/registration-form/registration-form.component';


const routes: Routes = [
  {path:'',component:HomeComponentComponent},
  { path: 'todo', component: TodoComponent },
  { path: 'registration', component: RegistrationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
