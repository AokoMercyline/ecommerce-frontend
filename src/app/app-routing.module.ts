import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GoalComponent } from './goal/goal.component';
// import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


const routes: Routes = [
  // { path: 'goals', component: GoalComponent},
  // { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    NotFoundComponent,
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
