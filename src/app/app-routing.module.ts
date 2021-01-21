import { QuestionListComponent } from './admin/question-list/question-list.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '',component:IndexComponent,pathMatch:'full'},
  { path: 'index', component: IndexComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminHome', component:AdminhomeComponent},
  { path: 'questionList', component: QuestionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
