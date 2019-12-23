import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ConfirmComponent } from './auth/confirm/confirm.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublicDashboardComponent } from './pages/public-dashboard/public-dashboard.component';
import { PrivateDashboardComponent } from './pages/private-dashboard/private-dashboard.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupComponent } from './pages/group/group.component';
const routes = [
    {
        path: 'profile/:id',
        component: ProfileComponent
    },
    {
        path: 'group/:id',
        canActivate: [AuthGuard],
        component: GroupComponent
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map