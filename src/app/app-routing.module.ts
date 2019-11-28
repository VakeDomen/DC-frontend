import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ConfirmComponent } from './auth/confirm/confirm.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublicDashboardComponent } from './pages/public-dashboard/public-dashboard.component';
import { PrivateDashboardComponent } from './pages/private-dashboard/private-dashboard.component';
import { GroupsComponent } from './pages/groups/groups.component';


const routes: Routes = [
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: PublicDashboardComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: PrivateDashboardComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'groups',
    canActivate: [AuthGuard],
    component: GroupsComponent
  },
  {
    path: 'confirm/:id',
    component: ConfirmComponent
  },
  {
    path: '**',
    component: PublicDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
