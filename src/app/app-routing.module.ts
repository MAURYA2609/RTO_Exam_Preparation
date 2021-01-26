import { QuestionListComponent } from './admin/question-list/question-list.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { GivetestComponent } from './users/givetest/givetest.component';
import { UserhomeComponent } from './users/userhome/userhome.component';

const routes: Routes = [
  { path: '',component:IndexComponent,pathMatch:'full'},
  { path: 'index', component: IndexComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminHome', component:AdminhomeComponent},
  { path: 'questionList', component: QuestionListComponent},
  { path: 'givetest', component: GivetestComponent},
  { path: 'userHome', component: UserhomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
