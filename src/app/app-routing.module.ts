// import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
// import { HomeComponent } from './admin/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
// import { AdminhomeComponent}
// import { HomeComponent}

const routes: Routes = [
  { path: '',component:IndexComponent,pathMatch:'full'},
  { path: 'index', component: IndexComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminHome', component:AdminhomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
