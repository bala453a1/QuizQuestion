import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {QuestionComponent} from './question/question.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'question',
    component: QuestionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
